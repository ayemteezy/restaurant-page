import { ROUTES, BASE_PATH } from "@/constants/routes";

import createNavbar from "@/components/navbar";

import createLayout from "@/layout";
import createHomePage from "@/pages/home";
import createMenuPage from "@/pages/menu";
import createAboutPage from "@/pages/about";
import createContactPage from "@/pages/contact";
import createNotFoundPage from "@/pages/error";

import createFooter from "@/components/footer";

const pageMap = {
  [ROUTES.HOME]: createHomePage,
  [ROUTES.MENU]: createMenuPage,
  [ROUTES.ABOUT]: createAboutPage,
  [ROUTES.CONTACT]: createContactPage,
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

  let pathname = window.location.pathname.replace(BASE_PATH, "");
  if (!pathname.startsWith("/")) pathname = "/" + pathname;

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

  window.dispatchEvent(new PopStateEvent("popstate"));
}

document.addEventListener("click", (event) => {
  const anchor = event.target.closest("a");
  if (!anchor) return;

  const href = anchor.getAttribute("href") || "/";

  if (href.startsWith("/")) {
    if (
      event.button === 0 &&
      !event.ctrlKey &&
      !event.metaKey &&
      !event.shiftKey &&
      !event.altKey
    ) {
      event.preventDefault();

      window.history.pushState(null, null, BASE_PATH + href);
      window.dispatchEvent(new PopStateEvent("popstate"));
    }
  }
});
