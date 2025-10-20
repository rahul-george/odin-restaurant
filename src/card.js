import "./card.css";

function Card(title, description, image) {
  const container = document.createElement("div");
  container.className = "card";
  const heading = document.createElement("p");
  heading.className = "card-heading";
  heading.textContent = title;
  container.appendChild(heading);
  const details = document.createElement("p");
  details.className = "card-description";
  details.textContent = description;
  container.appendChild(details);
  const photo = document.createElement("img");
  photo.className = "card-photo";
  photo.src = image;
  container.appendChild(photo);
  return container;
}

export { Card };
