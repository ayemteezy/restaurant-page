import styles from "./nav-links.module.css";

import { NAV_ITEMS } from "../../constants/routes";
import createNavItem from "../nav-item/nav-item";
import createButton from "../common/button";

export default function createNavLinks() {
  const container = document.createElement("div");
  container.className = styles.container;
  const list = document.createElement("ul");
  list.className = styles.list;

  NAV_ITEMS.forEach((item) => {
    const navItem = createNavItem(item.label, item.path);
    list.append(navItem);
  });

  const cta = createButton({ label: "Reserve" });

  container.append(list, cta);

  return container;
}
