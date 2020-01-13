const path = require("path");
const webpack = require("webpack");

module.exports = env => {
  if (!env.API_TOKEN)
    throw new Error(
      "Configure the API_TOKEN env var. See README.md to know how to do it"
    );
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
