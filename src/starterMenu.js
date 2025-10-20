import { Card } from "./card";
const starterMenu = [
  {
    title: "6er Nuggets",
    description:
      "6 crispy nuggets, freshly made, served with golden fries and your favourite sauce.",
    photo: "",
  },
  {
    title: "9er Nuggets",
    description:
      "9 juicy nuggets combined with a serving of crispy fries and two delicious sauces",
    photo: "",
  },
  {
    title: "Mixed Salat",
    description:
      "Colorful freshness in the plate - our crisp, mixed salat is ideal for healthy enjoyment",
    photo: "",
  },
];

function generateStarterMenu() {
  const dishes = document.createDocumentFragment();
  starterMenu.forEach((dish) => {
    dishes.appendChild(Card(dish.title, dish.description, dish.photo));
  });
  console.log(dishes);
  return dishes;
}

export { generateStarterMenu };
