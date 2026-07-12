export const ROUTES = Object.freeze({
  HOME: "/",
  MENU: "/menu",
  ABOUT: "/about",
  CONTACT: "/contact",
});

// A clean array configuration makes generating UI loops incredibly easy
export const NAV_ITEMS = [
  { label: "Home", path: ROUTES.HOME },
  { label: "Menu", path: ROUTES.MENU },
  { label: "About", path: ROUTES.ABOUT },
  { label: "Contact", path: ROUTES.CONTACT },
];
