import styles from "./form.module.css";

import createButton from "@/components/common/button";

import createTitle from "../title";
import createField from "../field";

export default function createForm() {
  const container = document.createElement("div");
  container.className = styles.container;

  const title = createTitle({
    subtitle: "reservation",
    label: "Book Your Table",
  });

  const form = document.createElement("form");
  form.className = styles.form;

  const name = createField({ placeholder: "Your name", name: "Full Name" });
  const email = createField({ placeholder: "your@email.com", name: "Email" });
  const phone = createField({
    placeholder: "+1 (555) 123-4567",
    name: "Phone",
  });

  const fieldset = document.createElement("div");
  fieldset.className = styles.fieldset;
  const date = createField({
    type: "date",
    name: "Date",
  });

  const guestContainer = document.createElement("div");
  guestContainer.className = styles.guestContainer;
  const guestLabel = document.createElement("label");
  guestLabel.textContent = "Guests";
  guestLabel.className = styles.label;

  const guests = document.createElement("select");
  for (let i = 0; i <= 10; i++) {
    const option = document.createElement("option");
    option.value = i;
    option.textContent = i;

    guests.append(option);
  }

  guestContainer.append(guestLabel, guests);

  const textarea = createField({
    textField: true,
    name: "Special Requests",
    placeholder: "Any dietary restrictions?",
  });

  const button = createButton({ size: "lg", className: styles.button });

  fieldset.append(date, guestContainer);
  form.append(name, email, phone, fieldset, textarea, button);
  container.append(title, form);
  return container;
}
