import path from "node:path";
import HtmlWebpackPlugin from "html-webpack-plugin";
import sharpAdapter from "responsive-loader/sharp.js";

export default {
  entry: "./src/index.js",
  output: {
    path: path.resolve(import.meta.dirname, "../dist"),
    filename: "js/[name].[contenthash].js",
    clean: true,
  },
  plugins: [new HtmlWebpackPlugin({ template: "./src/index.html" })],
  module: {
    rules: [
      {
        test: /\.module\.css$/i,
        use: [
          "style-loader",
          {
            loader: "css-loader",
            options: {
              modules: { localIdentName: "[name]__[local]--[hash:base64:5]" },
            },
          },
        ],
      },
      {
        test: /\.css$/i,
        exclude: /\.module\.css$/i,
        use: ["style-loader", "css-loader"],
      },
      {
        test: /\.svg$/i,
        type: "asset/resource",
        generator: { filename: "assets/icons/[name].[hash][ext]" },
      },
      {
        test: /\.gif$/i,
        type: "asset/resource",
        generator: { filename: "assets/images/[name].[hash][ext]" },
      },
      {
        test: /\.(png|jpe?g)$/i,
        type: "javascript/auto",
        use: [
          {
            loader: "responsive-loader",
            options: {
              adapter: sharpAdapter,
              format: "webp",
              name: "assets/images/[name].[hash].[ext]",
              esModule: false,
            },
          },
        ],
      },
    ],
  },
};
