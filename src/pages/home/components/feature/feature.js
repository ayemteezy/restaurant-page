import styles from "./feature.module.css";

import createHeading from "@/components/heading";
import createImage from "@/components/common/image";
import createButton from "@/components/common/button";

import dish1 from "@/assets/images/dish1.jpg";
import dish2 from "@/assets/images/dish2.jpg";
import dish3 from "@/assets/images/dish3.jpg";

const featuredDishes = [
  {
    image: dish1,
    category: "Main",
    name: "Pan-Seared Salmon",
    description:
      "Atlantic salmon with seasonal vegetables and hollandaise sauce",
  },
  {
    image: dish2,
    category: "Main",
    name: "Ribeye Steak",
    description:
      "Prime cut aged 45 days with truffle butter and roasted garlic",
  },
  {
    image: dish3,
    category: "Dessert",
    name: "Chocolate Torte",
    description: "Decadent layers of Belgian chocolate with fresh berries",
  },
];

export default function createFeature() {
  const container = document.createElement("div");
  container.className = styles.container;
  const content = document.createElement("div");
  content.classList.add("container", styles.content);

  const heading = createHeading({
    sub: "Signature Menu",
    heading: "Featured Selections",
  });
  heading.className = styles.heading;

  const wrapper = document.createElement("div");
  wrapper.className = styles.wrapper;
  featuredDishes.forEach((dish) => {
    const card = document.createElement("div");
    card.className = styles.card;

    const img = createImage({ src: dish.image, width: "100%", height: 230 });
    const textContainer = document.createElement("div");
    textContainer.className = styles.textContainer;

    const badge = document.createElement("p");
    badge.className = styles.badge;
    badge.textContent = dish.category;

    const title = document.createElement("h2");
    title.className = styles.title;
    title.textContent = dish.name;

    const description = document.createElement("p");
    description.className = styles.description;
    description.textContent = dish.description;
    textContainer.append(badge, title, description);
    card.append(img, textContainer);
    wrapper.append(card);
  });

  const button = createButton({ label: "View Full Menu" });

  content.append(heading, wrapper, button);
  container.append(content);
  return container;
}
