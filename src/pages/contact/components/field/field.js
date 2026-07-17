import styles from "./field.module.css";

export default function createField({
  name = "",
  type = "text",
  placeholder = "What's on your mind?",
  textField,
} = {}) {
  const field = document.createElement("div");
  field.className = styles.field;

  const label = document.createElement("label");
  label.className = styles.label;
  label.textContent = name;
  let input;
  if (textField) {
    input = document.createElement("textarea");
  } else {
    input = document.createElement("input");

    input.type = type;
  }
  input.placeholder = placeholder;

  field.append(label, input);
  return field;
}
