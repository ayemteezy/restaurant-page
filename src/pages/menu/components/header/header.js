import styles from "./header.module.css";

export default function createHeader() {
  const container = document.createElement("div");
  container.className = styles.container;

  const content = document.createElement("div");
  content.classList.add("container", styles.content);

  const sub = document.createElement("h4");
  sub.className = styles.sub;
  sub.textContent = "Seasonal Selection";
  const title = document.createElement("h1");
  title.className = styles.title;
  title.textContent = "Our Menu";
  const body = document.createElement("p");
  body.className = styles.body;
  body.textContent =
    "Handcrafted with love and the finest ingredients available";

  content.append(sub, title, body);
  container.append(content);
  return container;
}
