const path = require("path");
const { VueLoaderPlugin } = require("vue-loader");
const HtmlPlugin = require("html-webpack-plugin");
const webpack = require("webpack");

const isDev = process.env.NODE_ENV === "development";

const config = {
  mode: "development",
  target: "web",
  entry: path.join(__dirname, "src", "index.js"),
  output: {
    filename: "bundel.js",
    path: path.join(__dirname, "dist"),
  },
  module: {
    rules: [
      {
        test: /\.vue$/,
        loader: "vue-loader",
      },
      {
        test: /\.jsx$/,
        loader: "babel-loader",
      },
      {
        test: /\.css$/,
        use: ["vue-style-loader", "css-loader"],
      },
      {
        test: /\.styl/,
        use: [
          "style-loader",
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
      {
        test: /\.(gif|jpg|jpeg|svg|png)$/,
        use: [
          {
            loader: "url-loader",
            options: {
              limit: 10000,
              name: "[name].[ext]",
              outputPath: "assets/images",
              esModule: false,
              publicPath: "../../",
            },
          },
        ],
      },
    ],
  },
  plugins: [
    new webpack.DefinePlugin({
      "process.env": {
        NODE_ENV: isDev ? '"development"' : '"production"',
      },
    }),
    new VueLoaderPlugin(),
    new HtmlPlugin(),
  ],
};

if (isDev) {
  config.devtool = "eval-cheap-module-source-map";
  config.devServer = {
    port: 8000,
    host: "0.0.0.0", //本机也可以访问
    overlay: {
      errors: true, //有错误就显示到网页上
    },
    hot: true,
    // open: true,
  };
  config.plugins.push(
    new webpack.HotModuleReplacementPlugin(),
    new webpack.NoEmitOnErrorsPlugin()
  );
}

module.exports = config;
