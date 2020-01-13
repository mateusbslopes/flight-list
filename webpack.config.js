const path = require("path");
const webpack = require("webpack");

module.exports = env => {
  return {
    entry: "./src/",

    output: {
      path: path.resolve(__dirname, "dist"),
      filename: "bundle.js"
    },
    mode: "development",
    module: {
      rules: [
        {
          test: /\.js$/,
          exclude: /(node_modules)/,
          use: {
            loader: "babel-loader"
          }
        }
      ]
    },
    plugins: [
      new webpack.DefinePlugin({
        "process.env.API_TOKEN": JSON.stringify(env.API_TOKEN)
      })
    ]
  };
};
