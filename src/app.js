import "./styles/globals.css";

export default function App() {
  const root = document.getElementById("content");
  if (!root) return;

  // 1. Clear out any static HTML template placeholders
  root.innerHTML = "";
}
