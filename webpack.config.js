const path = require("path");
const HtmlWebpackPlugin = require("html-webpack-plugin");

module.exports = {
  mode: "development",
  entry: path.resolve(__dirname, "src/index.ts"),
  output: {
    filename: "bundle.js",
    path: path.resolve(__dirname, "dist"),
    clean: true,
    assetModuleFilename: "images/[name][hash][ext][query]"
  },
  module: {
    rules: [
      {
        test: /\.ts$/i,
        use: ["ts-loader"],
        exclude: "/node_modules/"
      },
      {
        test: /\.(jpg|jpeg|png|gif)$/,
        type: "asset/resource"
      },
      {
        test: /\.(scss)$/,
        use: ["style-loader", "css-loader", "sass-loader"]
      }
    ]
  },
  plugins: [
    new HtmlWebpackPlugin({
      title: "Restaurant Page",
      template: "./src/index.html"
    })
  ],
  devServer: {
    static: path.resolve(__dirname, "dist"),
    open: true,
    hot: true,
    compress: true,
    port: 3000,
    historyApiFallback: true
  },
  resolve: {
    extensions: [".ts", ".tsx", ".js"]
  }
};
