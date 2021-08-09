const path = require("path");
const { VueLoaderPlugin } = require("vue-loader");
const createVueLoaderOptions = require("./vue-loader.config");

const isDev = process.env.NODE_ENV === "development";

const config = {
  mode: process.env.NODE_ENV || "production",
  target: "web",
  entry: path.join(__dirname, "../client/index.js"),
  output: {
    filename: "bundel.[hash:8].js",
    path: path.join(__dirname, "../dist"),
    publicPath: "/public/",
  },
  module: {
    rules: [
      // {
      //   test: /\.(vue|js|jsx)$/,
      //   loader: "eslint-loader",
      //   exclude: /node_modules/,
      // },
      {
        test: /\.vue$/,
        loader: "vue-loader",
        options: createVueLoaderOptions(isDev),
        // options: {
        //   cssModules: {
        //     modules: true,
        //     localIdentName: "[path][name]---[local]---[hash:base64:5]",
        //     camelCase: true,
        //   },
        // },
      },
      {
        test: /\.jsx$/,
        loader: "babel-loader",
      },
      {
        test: /\.js$/,
        loader: "babel-loader",
        exclude: /node_modules/, //不要编译node modules的文件
      },
      //没有css文件
      // {
      //   test: /\.css$/,
      //   use: ["vue-style-loader", "css-loader"],
      // },

      {
        test: /\.(gif|jpg|jpeg|svg|png)$/,
        use: [
          {
            loader: "url-loader",
            options: {
              limit: 1024,
              name: "resources/[path][name].[hash:8].[ext]",
              //   outputPath: "assets/images",
              esModule: false,
              //   publicPath: "../../",
            },
          },
        ],
      },
    ],
  },
  plugins: [new VueLoaderPlugin()],
};

module.exports = config;
