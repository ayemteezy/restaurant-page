import styles from "./button.module.css";

import createLink from "../link";

export default function createButton({
  label = "Click me",
  href = "/",
  variant = "",
  size = "md",
  className,
} = {}) {
  const button = document.createElement("button");
  button.type = "button";
  button.textContent = label;

  button.style.pointerEvents = "none";

  if (variant && styles[variant]) {
    button.classList.add(styles[variant]);
  }
  if (size && styles[size]) {
    button.classList.add(styles[size]);
  }

  if (className) {
    button.classList.add(...className.split(" ").filter(Boolean));
  }

  const link = createLink({ href }, button);

  return link;
}
