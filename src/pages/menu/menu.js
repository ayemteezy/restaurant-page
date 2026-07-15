import styles from "./menu.module.css";

import createHeader from "./components/header";
import createBoard from "./components/board/board";

export default function createMenuPage() {
  const container = document.createElement("div");
  container.className = styles.container;

  const header = createHeader();
  const board = createBoard();

  container.append(header, board);
  return container;
}
