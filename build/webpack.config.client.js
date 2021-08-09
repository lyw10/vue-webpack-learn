const path = require("path");
const { VueLoaderPlugin } = require("vue-loader");
const HtmlPlugin = require("html-webpack-plugin");
const webpack = require("webpack");
const merge = require("webpack-merge");
const BaseConfig = require("./webpack.config.base");
const MiniCssExtractPlugin = require("mini-css-extract-plugin");

const isDev = process.env.NODE_ENV === "development";
const defaultPlugins = [
  new webpack.DefinePlugin({
    "process.env": {
      NODE_ENV: isDev ? '"development"' : '"production"',
    },
  }),
  new VueLoaderPlugin(),
  new HtmlPlugin(),
];
const devServer = {
  port: 8000,
  host: "0.0.0.0", //本机也可以访问
  overlay: {
    errors: true, //有错误就显示到网页上
  },
  //开发时，刷新页面不用到服务端请求
  historyApiFallback: {
    index: "/public/index.html",
  },
  hot: true,
  // open: true,
};
let config;
if (isDev) {
  config = merge.merge(BaseConfig, {
    // devtool: "eval-cheap-module-source-map",
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
    plugins: defaultPlugins.concat([
      new webpack.HotModuleReplacementPlugin(),
      //   new webpack.NoEmitOnErrorsPlugin(),
    ]),
  });
} else {
  config = merge.merge(BaseConfig, {
    entry: {
      app: path.join(__dirname, "../client/index.js"),
    },
    output: {
      filename: "[name].[chunkhash:8].js",
    },
    module: {
      rules: [
        {
          test: /\.styl/,
          use: [
            MiniCssExtractPlugin.loader,
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

    optimization: {
      splitChunks: {
        chunks: "all", //这表明将选择哪些 chunk 进行优化
      },
      runtimeChunk: true, //会为每个入口添加一个只含有 runtime 的额外 chunk
    },
    plugins: [
      new MiniCssExtractPlugin({
        // 类似 webpackOptions.output里面的配置 可以忽略
        filename: "[name].[hash:8].css",
        chunkFilename: "[id].[hash:8].css",
      }),
    ],
  });
}

module.exports = config;
