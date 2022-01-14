import "../css/styles.css";

function parseProducts() {
  // Update as needed to parse products from provided JSON.
  fetch("./products-list.json")
    .then((response) => {
      return response.json();
    })
    .then((data) => console.log(data));
}
