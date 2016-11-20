module.exports = {
  entry: "./app.js",
  output: {
    path: __dirname,
    filename: "dist/app.js"
  },
  module: {
    loaders: [
      { test: /\.js$/, exclude: /node_modules/, loader: "babel-loader" }
    ]
  }
}
