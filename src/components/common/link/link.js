export default function createLink({ href, activeClass = "" }, ...children) {
  const link = document.createElement("a");
  link.href = href;

  const syncState = () => {
    if (activeClass) {
      link.classList.toggle(activeClass, window.location.pathname === href);
    }
  };

  syncState();

  link.append(...children);

  window.addEventListener("popstate", () => {
    syncState();
  });

  return link;
}
