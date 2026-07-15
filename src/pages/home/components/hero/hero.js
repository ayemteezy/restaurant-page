import styles from "./hero.module.css";

import createButton from "@/components/common/button";
import createImage from "@/components/common/image";

import heroImg from "@/assets/images/hero.jpg";

export default function createHero() {
  const container = document.createElement("div");
  container.className = styles.container;

  const content = document.createElement("div");
  content.classList.add("container", styles.content);

  const textContainer = document.createElement("div");
  textContainer.className = styles.textContainer;

  const sub = document.createElement("p");
  sub.className = styles.sub;
  sub.textContent = "fine dining";

  const heading = document.createElement("h1");
  heading.className = styles.heading;
  heading.textContent = "Culinary Excellence";

  const body = document.createElement("p");
  body.className = styles.body;
  body.textContent =
    "Experience the art of contemporary cuisine. Each dish is meticulously crafted with premium ingredients and timeless techniques.";

  const buttonContainer = document.createElement("div");
  buttonContainer.className = styles.buttonContainer;

  const btn1 = createButton({ label: "Explore Menu" });
  const btn2 = createButton({ label: "Reserve Now", variant: "outline" });

  buttonContainer.append(btn1, btn2);
  textContainer.append(sub, heading, body, buttonContainer);

  const imageContainer = document.createElement("div");
  const img = createImage({ src: heroImg, width: 500, height: 350 });
  img.className = styles.img;
  imageContainer.append(img);
  content.append(textContainer, imageContainer);
  container.append(content);
  return container;
}
