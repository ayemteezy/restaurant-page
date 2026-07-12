import styles from "./navbar.module.css";

import createLogo from "../common/logo";
import createNavLinks from "../nav-links";

export default function createNavbar() {
  const header = document.createElement("header");

  const nav = document.createElement("nav");
  nav.className = "container";

  // logo
  const logo = createLogo();
  const navLinks = createNavLinks();

  // appends
  nav.append(logo, navLinks);
  header.append(nav);
  return header;
}
