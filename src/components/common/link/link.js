import { BASE_PATH } from "@/constants/routes";

export default function createLink(
  { href = "/", activeClass = "" },
  ...children
) {
  const link = document.createElement("a");
  link.href = href;

  const syncState = () => {
    if (activeClass) {
      let currentPath = window.location.pathname.replace(BASE_PATH, "");

      const spaQueryPath = window.location.search.startsWith("?/")
        ? window.location.search.slice(1)
        : "";

      if (spaQueryPath) {
        currentPath = spaQueryPath;
      }

      if (!currentPath.startsWith("/")) currentPath = "/" + currentPath;

      link.classList.toggle(activeClass, currentPath === href);
    }
  };

  syncState();
  link.append(...children);

  window.addEventListener("popstate", () => {
    syncState();
  });

  return link;
}
