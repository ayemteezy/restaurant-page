import createLayout from "@/layout";
import createHomePage from "@/pages/home";

export function initRouter() {
  const app = document.getElementById("root");
  if (!app) return;

  const homePage = createHomePage();
  const layout = createLayout(homePage);

  app.append(layout);
}
