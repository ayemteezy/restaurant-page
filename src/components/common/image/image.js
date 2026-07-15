import "./image.module.css";

import noImage from "@/assets/images/no-image.svg";

export default function createImage({
  src,
  width = "200",
  height,
  className,
} = {}) {
  const img = document.createElement("img");

  if (
    typeof width === "string" &&
    (width.includes("%") || width.includes("px") || width.includes("rem"))
  ) {
    img.style.width = width;
  } else if (width) {
    img.width = width;
  }

  if (
    typeof height === "string" &&
    (height.includes("%") || height.includes("px") || height.includes("rem"))
  ) {
    img.style.height = height;
  } else if (height) {
    img.height = height;
  }

  if (width && !height) img.style.height = "auto";
  if (!width && height) img.style.width = "auto";

  img.width = width;
  img.height = height;

  img.src = src ? src : noImage;

  if (className) {
    img.classList.add(...className.split(" ").filter(Boolean));
  }

  return img;
}
