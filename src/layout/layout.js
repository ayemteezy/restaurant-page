import styles from "./layout.module.css";

export default function createLayout(pageContent) {
  // main content
  const main = document.createElement("main");
  main.className = styles.content;
  main.append(pageContent);

  return main;
}
