import "@/globals.css";
import { initRouter } from "@/router";

export default function App() {
  initRouter();

  window.addEventListener("popstate", () => {
    initRouter();
  });
}
