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
