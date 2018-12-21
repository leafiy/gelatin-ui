const path = require("path");
const BundleAnalyzerPlugin = require("webpack-bundle-analyzer")
  .BundleAnalyzerPlugin;

function resolve(dir) {
  return path.join(__dirname, dir);
}
module.exports = {
  lintOnSave: false,
  css: { extract: false },

  configureWebpack: () => {
    if (process.env.analyzer == "enable") {
      return {
        plugins: [new BundleAnalyzerPlugin()]
      };
    }
  },

  chainWebpack: config => {
    // config.resolve.alias
      // .set("gelatin-ui", resolve("../gelatin-ui/packages/"))
      // .set('vue', 'vue/dist/vue.js')
  },
};
