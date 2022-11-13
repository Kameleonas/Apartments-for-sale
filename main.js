// API
const BASE_URL = "https://robust-safe-crafter.glitch.me/";

// create card with details from API
function fillCardContent(data) {
  data.forEach((element) => {
    const card = document.createElement("div");
    card.className = "card";
    const cardField = document.getElementById("cards");
    cardField.append(card);
    const textContent = document.createElement("div");
    textContent.className = "cardDescription";

    //fill card data from API
    const propertyImg = document.createElement("img");
    propertyImg.src = element.image;
    propertyImg.alt = "Butai lietuvoje";
    const price = document.createElement("p");
    price.innerText = `${element.price} €`;
    price.className = "price";
    const city = document.createElement("p");
    city.innerText = element.city;
    city.className = "city";
    const description = document.createElement("p");
    description.innerText = element.description;
    description.className = "description";

    card.append(propertyImg, textContent);
    textContent.append(price, city, description);
  });
}

// fetching data
fetch(BASE_URL)
  .then((response) => response.json())
  .then((result) => fillCardContent(result))
  .catch((error) => console.log(error));
