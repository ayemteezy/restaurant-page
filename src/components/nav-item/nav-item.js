import styles from "./nav-item.module.css";

import { BASE_PATH } from "@/constants/routes";

import createLink from "../common/link";

export default function createNavItem(label, href) {
  const listItem = document.createElement("li");

  const link = createLink(
    {
      href: href,
      activeClass: styles.active,
    },
    label,
  );
  link.href = href;
  link.className = styles.link;
  link.textContent = label;

  listItem.append(link);
  return listItem;
}
