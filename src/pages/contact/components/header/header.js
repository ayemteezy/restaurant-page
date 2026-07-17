import styles from "./header.module.css";

export default function createHeader() {
  const container = document.createElement("div");
  container.className = styles.container;

  const content = document.createElement("div");
  content.classList.add("container", styles.content);

  const title = document.createElement("h1");
  title.className = styles.title;
  title.textContent = "Get in Touch";
  const body = document.createElement("p");
  body.className = styles.body;
  body.textContent = "Make a reservation or reach out with any inquiries";

  content.append(title, body);
  container.append(content);
  return container;
}
