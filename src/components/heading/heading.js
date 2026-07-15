import styles from "./heading.module.css";

export default function createHeading({
  sub = "subtitle",
  heading = "heading",
} = {}) {
  const container = document.createElement("div");

  const subtitle = document.createElement("p");
  subtitle.textContent = sub;
  subtitle.className = styles.sub;

  const title = document.createElement("h3");
  title.textContent = heading;
  title.className = styles.heading;

  container.append(subtitle, title);
  return container;
}
