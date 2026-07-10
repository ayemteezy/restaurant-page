// webpack.dev.js
import { merge } from "webpack-merge";
import common from "./webpack.common.js";

export default merge(common, {
  mode: "development",
  devtool: "eval-source-map",
  devServer: {
    static: [
      { directory: "./dist" },
      { directory: "./public" }, // serves public/ as-is, dev only
    ],
    open: true,
    hot: true,
  },
});
