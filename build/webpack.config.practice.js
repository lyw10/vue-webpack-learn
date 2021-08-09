const path = require("path");
const { VueLoaderPlugin } = require("vue-loader");
const HtmlPlugin = require("html-webpack-plugin");
const webpack = require("webpack");
const merge = require("webpack-merge");
const BaseConfig = require("./webpack.config.base");
// const MiniCssExtractPlugin = require("mini-css-extract-plugin");

const isDev = process.env.NODE_ENV === "development";

const defaultPlugins = [
  new webpack.DefinePlugin({
    "process.env": {
      NODE_ENV: isDev ? '"development"' : '"production"',
    },
  }),
  new VueLoaderPlugin(),
  new HtmlPlugin({
    template: path.join(__dirname, "template.html"),
  }),
];

const devServer = {
  port: 8000,
  host: "0.0.0.0", //本机也可以访问
  overlay: {
    errors: true, //有错误就显示到网页上
  },
  hot: true,
  // open: true,
};

let config;

if (isDev) {
  config = merge.merge(BaseConfig, {
    // devtool: "eval-cheap-module-source-map",
    entry: path.join(__dirname, "../practice/index.js"),
    module: {
      rules: [
        {
          test: /\.styl/,
          use: [
            //   "style-loader",  不能实时显示效果
            "vue-style-loader", //更改vue中的style可以实时显示效果
            "css-loader",

            {
              loader: "postcss-loader",
              options: {
                sourceMap: true, //stylus-loader编译的sourceMap可以直接用
              },
            },
            "stylus-loader",
          ],
        },
      ],
    },
    devServer,
    // import Vue from 'vue'
    resolve: {
      alias: {
        vue: path.join(__dirname, "../node_modules/vue/dist/vue.esm.js"),
      },
    },
    plugins: defaultPlugins.concat([
      new webpack.HotModuleReplacementPlugin(),
      //   new webpack.NoEmitOnErrorsPlugin(),
    ]),
  });
}

module.exports = config;
