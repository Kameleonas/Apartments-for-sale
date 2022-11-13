// API
const BASE_URL = "https://robust-safe-crafter.glitch.me/";

// Posting data to API
document.querySelector("form").addEventListener("submit", (event) => {
  event.preventDefault();
  post(createObjectData());
});

// create new list item from input data
function createObjectData() {
  const imgSrc = document.querySelectorAll("input")[0].value;
  const price = document.querySelectorAll("input")[1].value;
  const description = document.querySelector("textarea").value;
  const city = document.querySelector("select").value;

  const newObject = {
    image: imgSrc,
    city: city,
    price: price,
    description: description,
  };
  return newObject;
}

// post new values to API
function post(incomingObject) {
  fetch(BASE_URL, {
    method: "DELETE",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify(incomingObject),
  })
    .then((res) => {
      if (res.ok) {
        console.log(res.status);
      } else {
        console.log(res.status);
      }
    })
    .catch((error) => {
      console.log(error);
    });
}
