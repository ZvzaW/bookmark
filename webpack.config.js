const path = require("path");
const HtmlWebpackPlugin = require("html-webpack-plugin");
const MiniCssExtractPlugin = require("mini-css-extract-plugin");

module.exports = (env, argv) => {
  const isProduction = argv.mode === "production";

  return {
    entry: "./src/index.js",
    resolve: {
      extensions: [".js", ".jsx"],
    },
    output: {
      path: path.resolve(__dirname, "dist"),
      filename: isProduction ? "js/[name].[contenthash].js" : "js/[name].js",
      assetModuleFilename: "assets/[name].[contenthash][ext]",
      clean: true,
    },
    devtool: isProduction ? "source-map" : "eval-source-map",
    module: {
      rules: [
        {
          test: /\.jsx?$/,
          include: path.resolve(__dirname, "src"),
          type: "javascript/auto",
          use: "babel-loader",
        },
        {
          test: /\.s?css$/,
          use: [
            isProduction ? MiniCssExtractPlugin.loader : "style-loader",
            "css-loader",
            "sass-loader",
          ],
        },
        {
          test: /\.(png|jpe?g|gif|webp)$/i,
          type: "asset/resource",
        },
        {
          // import Icon from './icon.svg' -> React component (fill/stroke editable in CSS)
          // import url from './image.svg?url' -> file URL (for <img> or CSS)
          test: /\.svg$/i,
          oneOf: [
            { resourceQuery: /url/, type: "asset/resource" },
            { issuer: /\.s?css$/, type: "asset/resource" },
            { issuer: /\.jsx?$/, use: "@svgr/webpack" },
          ],
        },
      ],
    },
    plugins: [
      new HtmlWebpackPlugin({
        template: "./src/index.html",
        favicon: "./src/assets/images/favicon-32x32.png",
      }),
      isProduction &&
        new MiniCssExtractPlugin({
          filename: "css/[name].[contenthash].css",
        }),
    ].filter(Boolean),
    devServer: {
      static: path.resolve(__dirname, "dist"),
      port: 9000,
      open: true,
      hot: true,
    },
  };
};
