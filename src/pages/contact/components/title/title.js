import styles from "./title.module.css";

export default function createTitle({
  subtitle = "sub",
  label = "title",
} = {}) {
  const container = document.createElement("div");
  container.className = styles.container;

  const sub = document.createElement("h4");
  sub.className = styles.sub;
  sub.textContent = subtitle;

  const title = document.createElement("h2");
  title.className = styles.title;
  title.textContent = label;

  container.append(sub, title);
  return container;
}
