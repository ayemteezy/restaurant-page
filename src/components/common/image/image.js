import styles from "./image.module.css";

import noImage from "@/assets/images/no-image.svg";

export default function createImage({
  src,
  width = "200",
  height = "200",
  className,
} = {}) {
  const img = document.createElement("img");

  img.width = width;
  img.height = height;

  if (src) {
    img.src = src;
  } else {
    img.src = noImage;
  }

  if (className) {
    img.classList.add(...className.split(" ").filter(Boolean));
  }

  return img;
}
