import styles from "./about.module.css";
import createHeader from "./components/header";
import createPhilosophy from "./components/philosophy";
import createTeam from "./components/team";
import createValues from "./components/values";

export default function createAboutPage() {
  const container = document.createElement("div");
  container.className = styles.container;

  const header = createHeader();
  const philosophy = createPhilosophy();
  const team = createTeam();
  const values = createValues();

  container.append(header, philosophy, team, values);

  return container;
}
