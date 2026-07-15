import styles from "./about.module.css";

import createHeading from "@/components/heading";

const data = [
  {
    title: "Premium Sourcing",
    body: "We partner with local farmers and suppliers to bring you the finest, freshest ingredients available.",
  },
  {
    title: "Expert Craftsmanship",
    body: "Our chefs combine classical training with contemporary creativity to deliver unforgettable dishes.",
  },
  {
    title: "Intimate Dining",
    body: "Every detail of your experience is designed to create a warm, welcoming atmosphere.",
  },
];

export default function createAbout() {
  const container = document.createElement("div");
  container.className = styles.container;
  const content = document.createElement("div");
  content.classList.add("container", styles.content);

  const heading = createHeading({
    sub: "About us",
    heading: "Where Tradition Meets Innovation",
  });

  const cardsWrapper = document.createElement("div");
  if (styles.cardsWrapper) {
    cardsWrapper.className = styles.cardsWrapper;
  }

  data.forEach((data) => {
    const card = document.createElement("div");
    card.className = styles.card;

    const cardTitle = document.createElement("h2");
    const cardBody = document.createElement("p");

    cardTitle.className = styles.cardTitle;
    cardTitle.textContent = data.title;
    cardBody.className = styles.cardBody;
    cardBody.textContent = data.body;

    card.append(cardTitle, cardBody);
    cardsWrapper.append(card);
  });

  content.append(heading, cardsWrapper);
  container.append(content);
  return container;
}
