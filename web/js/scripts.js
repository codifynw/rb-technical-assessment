import { SimpleProduct } from "./Components/simpleProduct";
import "../css/styles.css";

const parseButton = document.getElementById("parseButton");
const contentContainer = document.getElementById("container");

function init() {
  parseButton.addEventListener("click", parseProducts);
}

function parseProducts() {
  // RUNTIME IMPORT TO SIMULATE API REQUEST. THIS WOULD BE
  // REPLACED WITH FETCH OR OTHER API METHOD IN PRODUCTION.
  import(
    /* webpackChunkName: "json_products" */
    "../../products-list.json"
  ).then(({ default: productList }) => {
    const productContainer = document.createElement("div");
    productContainer.classList.add("product-container");
    contentContainer.innerHTML = "";
    contentContainer.appendChild(productContainer);

    productList.products
      .filter((product) => product.style.style == "drop-in")
      .forEach((product) => {
        const productDiv = SimpleProduct(product);
        productContainer.appendChild(productDiv);
      });
  });
}

init();
