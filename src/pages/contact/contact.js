import styles from "./contact.module.css";

import createHeader from "./components/header";
import createInformation from "./components/information";
import createForm from "./components/form";

export default function createContactPage() {
  const container = document.createElement("div");
  container.className = styles.container;

  const header = createHeader();
  const content = document.createElement("div");
  content.classList.add("container", styles.content);

  const information = createInformation();
  const form = createForm();

  content.append(information, form);
  container.append(header, content);
  return container;
}
