import { ROUTES } from "@/constants/routes";

import createNavbar from "@/components/navbar";

import createLayout from "@/layout";
import createHomePage from "@/pages/home";
import createNotFoundPage from "./pages/error";

const pageMap = {
  [ROUTES.HOME]: createHomePage,
};
const navbar = createNavbar();
const layout = createLayout();

export function initRouter() {
  const app = document.getElementById("root");
  if (!app) return;

  if (!app.contains(navbar)) {
    app.appendChild(navbar);
    app.appendChild(layout);
  }

  const pathname = window.location.pathname;
  const createPage = pageMap[pathname] || createNotFoundPage;
  const pageContent = createPage();

  layout.innerHTML = "";
  layout.append(pageContent);
}

document.addEventListener("click", (event) => {
  const anchor = event.target.closest("a");
  if (!anchor) return;

  const href = anchor.getAttribute("href");

  if (href && href.startsWith("/")) {
    if (
      event.button === 0 &&
      !event.ctrlKey &&
      !event.metaKey &&
      !event.shiftKey &&
      !event.altKey
    ) {
      event.preventDefault();

      window.history.pushState(null, null, href);
      window.dispatchEvent(new PopStateEvent("popstate"));
    }
  }
});
