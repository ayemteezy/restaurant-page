import styles from "./philosophy.module.css";

import createImage from "@/components/common/image";

import culinary from "@/assets/images/culinary.jpg";

export default function createPhilosophy() {
  const container = document.createElement("div");
  container.className = styles.container;

  const content = document.createElement("div");
  content.classList.add("container", styles.content);

  const textContainer = document.createElement("div");
  textContainer.className = styles.textContainer;

  const header = document.createElement("div");
  header.className = styles.header;

  const sub = document.createElement("h4");
  sub.textContent = "Our Philosophy";
  sub.className = styles.sub;
  const title = document.createElement("h2");
  title.textContent = "Culinary Precision";
  title.className = styles.title;

  const body = document.createElement("div");
  body.className = styles.body;
  const p1 = document.createElement("p");
  const p2 = document.createElement("p");
  p1.textContent =
    "At MERIDIAN, we believe that exceptional dining is an art form. Each plate is meticulously crafted with the finest ingredients sourced from sustainable local producers.";
  p2.textContent =
    "Our commitment to excellence extends beyond the plate—from our intimate ambiance to our attentive service, every element is designed to create an unforgettable experience.";
  body.append(p1, p2);

  const imageContainer = document.createElement("div");
  imageContainer.className = styles.imageContainer;
  const img = createImage({ src: culinary, width: "100%", height: 400 });
  img.className = styles.img;

  imageContainer.append(img);

  header.append(sub, title, body);
  textContainer.append(header);
  content.append(textContainer, imageContainer);
  container.append(content);
  return container;
}
