import createNavbar from "@/components/navbar";

export default function createLayout(pageContent) {
  const layoutWrapper = document.createElement("div");
  layoutWrapper.className = "layout-wrapper";

  // navbar
  const header = document.createElement("header");
  const navbar = createNavbar();
  header.append(navbar);

  // main content
  const main = document.createElement("main");
  main.append(pageContent);

  layoutWrapper.append(header, main);
  return layoutWrapper;
}
