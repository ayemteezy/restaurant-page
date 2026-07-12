import styles from "./not-found.module.css";

import error from "@/assets/images/error.png";

export default function createNotFoundPage() {
  const container = document.createElement("div");
  container.className = styles.container;

  const img = document.createElement("img");
  img.src = error;
  img.alt = "404 Error";
  img.className = styles.error;

  const textContainer = document.createElement("div");
  textContainer.classList = styles.textContainer;

  const title = document.createElement("h1");
  title.textContent = "Page Not Found";
  title.className = styles.title;

  const desc = document.createElement("p");
  desc.textContent =
    "We're sorry, the page you requested could not be found. Please go back to the homepage.";
  desc.className = styles.desc;

  // button
  const buttonContainer = document.createElement("a");
  buttonContainer.href = "/";
  const button = document.createElement("button");
  button.textContent = "Back to Home";
  // TODO: Create a button and image component

  buttonContainer.append(button);
  textContainer.append(title, desc);
  container.append(img, textContainer, buttonContainer);
  return container;
}
