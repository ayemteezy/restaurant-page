import createImage from "../../components/common/image/image";
import styles from "./home.module.css";

export default function createHomePage() {
  const pageContainer = document.createElement("div");
  const title = document.createElement("h1");
  title.className = styles.title;
  title.textContent = "this is my main content";
  const img = createImage();
  pageContainer.append(title, img);
  return pageContainer;
}
