import styles from "./navbar.module.css";

export default function createNavbar() {
  const nav = document.createElement("nav");
  nav.textContent = "this is my nav";

  return nav;
}
