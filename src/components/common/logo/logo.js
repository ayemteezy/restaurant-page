import styles from "./logo.module.css";

export default function createLogo() {
  const logo = document.createElement("a");
  logo.href = "/";

  const label = document.createElement("h1");
  label.className = styles.label;
  label.textContent = "meridian";

  logo.append(label);

  return logo;
}
