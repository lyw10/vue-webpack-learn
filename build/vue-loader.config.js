// const docsLoader = require.resolve("./docs-loader");
module.exports = (isDev) => {
  return {
    preserveWhitespace: false,
    extractCSS: !isDev, //把vue里的style打包出来;开发环境不需要，正式环境需要
    cssModules: {
      modules: true,
      localIdentName: "[path][name]__[local]--[hash:base64:5]",
      //在当前vue文件中写的样式会生成独一无二的名字，在其他vue文件中是无法调用的

      camelCase: true,
    },
    // postcss,
    // hotReload,
    // loaders: {
    //   docs: docsLoader,
    // },
  };
};
