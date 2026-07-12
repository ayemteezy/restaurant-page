import styles from "./nav-item.module.css";

import createLink from "../common/link";

export default function createNavItem(label, href) {
  const listItem = document.createElement("li");

  const isActive = window.location.pathname === href;

  const link = createLink(
    {
      href: href,
      activeClass: styles.active,
    },
    label,
  );
  link.href = href;
  link.className = styles.link;
  link.classList.toggle(styles.active, isActive);
  link.textContent = label;

  listItem.append(link);
  return listItem;
}
