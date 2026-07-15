import styles from "./cta.module.css";

import createButton from "@/components/common/button";

export default function createCTA() {
  const container = document.createElement("div");
  container.className = styles.container;

  const content = document.createElement("div");
  content.classList.add("container", styles.content);

  const heading = document.createElement("h1");
  heading.className = styles.heading;
  heading.textContent = "Ready for Your Next Exceptional Meal?";

  const body = document.createElement("p");
  body.className = styles.body;
  body.textContent =
    "Reserve your table today and join us for an unforgettable dining experience.";

  const button = createButton({ label: "Make a Reservation" });

  content.append(heading, body, button);
  container.append(content);
  return container;
}
