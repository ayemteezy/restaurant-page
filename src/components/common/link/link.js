import styles from "./link.module.css";

export default function createLink(
  { href, activeClass = styles.active },
  ...children
) {
  const link = document.createElement("a");
  link.href = href;

  if (activeClass) {
    link.classList.toggle(activeClass, window.location.pathname === href);
  }

  children.forEach((child) => {
    link.append(child);
  });

  window.addEventListener("popstate", () => {
    if (activeClass) {
      link.classList.toggle(activeClass, window.location.pathname === href);
    }
  });

  return link;
}
