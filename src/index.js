import "./styles.css";
import { generateStarterMenu } from "./starterMenu";
import { generateMainMenu } from "./mainMenu";
import { generateDrinksMenu } from "./drinksMenu";

function removeContent() {
  Array.from(contentContainer.childNodes).forEach((child) => child.remove());
}

console.log("Happy developing ✨");
function handleTabChange(event) {
  removeContent();
  let child = null;
  switch (event.target.dataset.id) {
    case "starter":
      child = generateStarterMenu();
      break;
    case "main":
      child = generateMainMenu();
      break;
    case "drinks":
      child = generateDrinksMenu();
      break;
    default:
      console.error("Not a valid option!");
  }

  contentContainer.appendChild(child);
}

const contentContainer = document.getElementById("content");
const tabButtons = document.getElementsByClassName("tab");
Array.from(tabButtons).forEach((button) => {
  console.log(button);
  button.addEventListener("click", handleTabChange);
});
contentContainer.append(generateStarterMenu());
