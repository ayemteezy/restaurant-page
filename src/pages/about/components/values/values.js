import styles from "./values.module.css";

const values = [
  {
    title: "Excellence",
    body: "We pursue perfection in every aspect of our operation, from ingredient selection to presentation.",
  },
  {
    title: "Sustainability",
    body: "We partner with local suppliers and practice environmentally responsible sourcing and preparation.",
  },
  {
    title: "Innovation",
    body: "We honor tradition while continuously exploring new techniques and flavor combinations.",
  },
];

export default function createValues() {
  const container = document.createElement("div");
  container.classList.add("container", styles.container);

  const header = document.createElement("h2");
  header.className = styles.header;
  header.textContent = "Our Values";

  const valueContainer = document.createElement("div");
  valueContainer.className = styles.valueContainer;

  values.forEach((value) => {
    const card = document.createElement("div");
    card.className = styles.card;

    const title = document.createElement("h3");
    title.className = styles.title;
    title.textContent = value.title;

    const body = document.createElement("p");
    body.className = styles.body;
    body.textContent = value.body;

    card.append(title, body);
    valueContainer.append(card);
  });

  container.append(header, valueContainer);
  return container;
}
