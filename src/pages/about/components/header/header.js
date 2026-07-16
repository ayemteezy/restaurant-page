import styles from "./header.module.css";

export default function createHeader() {
  const container = document.createElement("div");
  container.className = styles.container;

  const content = document.createElement("div");
  content.classList.add("container", styles.content);

  const title = document.createElement("h1");
  title.className = styles.title;
  title.textContent = "Our Story";
  const body = document.createElement("p");
  body.className = styles.body;
  body.textContent = "Discover the philosophy and passion behind MERIDIAN";

  content.append(title, body);
  container.append(content);
  return container;
}
