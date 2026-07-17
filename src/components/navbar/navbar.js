import styles from "./navbar.module.css";

import createLogo from "../common/logo";
import createNavLinks from "../nav-links";

export default function createNavbar() {
  const header = document.createElement("header");
  header.className = styles.header;

  const nav = document.createElement("nav");

  nav.classList.add("container", styles.nav);

  // logo
  const logo = createLogo();
  const navLinks = createNavLinks();

  // appends
  nav.append(logo, navLinks);
  header.append(nav);
  return header;
}
