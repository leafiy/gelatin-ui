module.exports = {
  presets: [
    [
      "@babel/preset-env",
      {
        loose: false,
        modules: "commonjs",
        spec: true,
        targets: {
          browsers: [
            "last 3 Chrome versions",
            "last 3 Firefox versions",
            "Safari >= 10",
            "Explorer >= 11",
            "Edge >= 12",
            "iOS >= 10",
            "Android >= 6"
          ]
        },
        useBuiltIns: "usage",
        debug: false
      }
    ],
    [
      "poi/babel",
      {
        jsx: "vue"
      }
    ]
  ],
  plugins: ["dynamic-import-node"]
};
