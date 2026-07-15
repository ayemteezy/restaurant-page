import styles from "./board.module.css";
const menu = [
  {
    category: "Appetizers",
    items: [
      {
        name: "Seasonal Vegetables",
        description: "Carefully selected produce with house-made vinaigrettes",
        price: 18,
      },
      {
        name: "Oyster Selection",
        description: "Fresh from local waters, served with mignonette",
        price: 22,
      },
      {
        name: "Foie Gras Terrine",
        description: "With brioche and house-made accompaniments",
        price: 26,
      },
    ],
  },
  {
    category: "Main Courses",
    items: [
      {
        name: "Pan-Seared Halibut",
        description: "With seasonal vegetables and beurre blanc",
        price: 52,
      },
      {
        name: "Heritage Duck Breast",
        description: "With cherry gastrique and root vegetable purée",
        price: 56,
      },
      {
        name: "Prime Beef Tenderloin",
        description: "With truffle demi-glace and potato fondant",
        price: 62,
      },
    ],
  },
  {
    category: "Desserts",
    items: [
      {
        name: "Dark Chocolate Soufflé",
        description: "With Valrhona chocolate and vanilla bean ice cream",
        price: 14,
      },
      {
        name: "Lemon Tart",
        description: "With Sicilian lemon curd and meringue",
        price: 12,
      },
      {
        name: "Seasonal Panna Cotta",
        description: "With fresh berries and fruit coulis",
        price: 10,
      },
    ],
  },
  {
    category: "Beverages",
    items: [
      {
        name: "Wine Pairings",
        description: "Curated selections from around the world",
        price: 45,
      },
      {
        name: "Craft Cocktails",
        description: "House-made syrups and fresh ingredients",
        price: 16,
      },
      {
        name: "Coffee & Tea",
        description: "Premium selections from specialty providers",
        price: 8,
      },
    ],
  },
];

export default function createBoard() {
  const container = document.createElement("div");
  container.classList.add("container", styles.container);

  menu.forEach((data) => {
    const menuContainer = document.createElement("div");

    const title = document.createElement("h3");
    title.textContent = data.category;
    menuContainer.append(title);
    container.append(menuContainer);
  });
  return container;
}
