import createButton from "../../components/common/button";
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
  title.textContent = "Looks like we're missing something";
  title.className = styles.title;

  const desc = document.createElement("p");
  desc.textContent =
    "We couldn't cook up the page you were looking for because it doesn't exist.";
  desc.className = styles.desc;

  // button
  const buttonContainer = document.createElement("a");
  buttonContainer.href = "/";
  const button = createButton({ label: "Return to homepage", size: "lg" });
  // TODO: Create a button and image component

  buttonContainer.append(button);
  textContainer.append(title, desc);
  container.append(img, textContainer, buttonContainer);
  return container;
}
