import { ROUTES } from "@/constants/routes";

import createNavbar from "@/components/navbar";

import createLayout from "@/layout";
import createHomePage from "@/pages/home";
import createMenuPage from "@/pages/menu";
import createNotFoundPage from "@/pages/error";
import createFooter from "@/components/footer";

const pageMap = {
  [ROUTES.HOME]: createHomePage,
  [ROUTES.MENU]: createMenuPage,
};
const navbar = createNavbar();
const footer = createFooter();
const layout = createLayout();

export function initRouter() {
  const app = document.getElementById("root");
  if (!app) return;

  app.appendChild(navbar);
  app.appendChild(layout);
  app.appendChild(footer);

  const pathname = window.location.pathname;

  const createPage = pageMap[pathname];
  const isNotFound = !createPage;

  layout.innerHTML = "";
  const pageContent = isNotFound ? createNotFoundPage() : createPage();
  layout.append(pageContent);

  if (isNotFound) {
    footer.remove();
  } else {
    const app = document.getElementById("root");
    if (app && !app.contains(footer)) {
      app.appendChild(footer);
    }
  }
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
