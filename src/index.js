import "./styles.css";
import { generateStarterMenu } from "./starterMenu";
import { generateMainMenu } from "./mainMenu";
import { generateDrinksMenu } from "./drinksMenu";

console.log("Happy developing ✨");
function handleTabChange(event) {
  contentContainer.removeChild(contentContainer.childNodes[0]);
  let child = null;
  switch (event.target.dataset.id) {
    case "0":
      child = generateStarterMenu();
      break;
    case "1":
      child = generateMainMenu();
      break;
    case "2":
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
