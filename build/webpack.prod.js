import { merge } from "webpack-merge";
import common from "./webpack.common.js";

export default merge(common, {
  mode: "production",
  devtool: "source-map", // Secure external maps optimized strictly for production error tracking
  optimization: {
    runtimeChunk: "single", // Segregates standard loading logic blocks for better runtime caching
    splitChunks: {
      chunks: "all", // Extracts duplicate npm modules out to a global vendor ecosystem
      cacheGroups: {
        vendor: {
          test: /[\\/]node_modules[\\/]/,
          name: "vendors",
          chunks: "all",
        },
      },
    },
  },
});
