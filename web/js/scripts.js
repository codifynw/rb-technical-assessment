import { product } from "prelude-ls";
import "../css/styles.css";

function init() {
  const parseButton = document.getElementById("parseButton");
  parseButton.addEventListener("click", parseProducts);
}

function parseProducts() {
  // RUNTIME IMPORT TO SIMULATE API REQUEST. THIS WOULD BE
  // REPLACED WITH FETCH OR OTHER API METHOD IN PRODUCTION.
  import(
    /* webpackChunkName: "json_products" */
    "../../products-list.json"
  ).then(({ default: productList }) => {
    productList.products
      .filter((product) => product.style.style == "drop-in")
      .forEach((product) => {
        const productEl = document.createElement("div");
        productEl.classList.add("product");
        productEl.innerHTML = `
        <h3>${product.name}</h3>
        <p>${product.price}</p>
      `;
        document.body.appendChild(productEl);
      });
  });
}

init();
