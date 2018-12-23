module.exports = {
  entry: ["packages/index.js"],
  output: {
    format: "cjs",
    fileNames: {
      js: "gelatin-ui-[name].js",
      css: "gelatin-ui-[name].css",
      font: "gelatin-ui-[path][name].[ext]",
      image: "gelatin-ui-[path][name].[ext]"
    }
  },
  css: {
    extract: false
  }
};
