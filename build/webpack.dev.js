import { merge } from "webpack-merge";
import common from "./webpack.common.js";

export default merge(common, {
  mode: "development",
  devtool: "eval-source-map",
  devServer: {
    watchFiles: ["./src/template.html"],
    static: {
      directory: "./dist",
    },
    open: true,
    hot: true,
    port: 3000,
    historyApiFallback: true,
    client: {
      overlay: {
        errors: true,
        warnings: false,
      },
      progress: true,
    },
    compress: true,
  },
});
