const nextTranslate = require("next-translate");

module.exports = {
  reactStrictMode: true,
  ...nextTranslate(),
  module: {
    loaders: [
      {
        test: /plugin\.css$/,
        loaders: ["style-loader", "css"],
      },
    ],
  },
};
