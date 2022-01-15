import React from "react";
import ReactDOM from "react-dom";
import { ProductGrid } from "./Components/ProductGrid";
import { VanillaProduct } from "./VanillaComponents/VanillaProduct";

import "../css/styles.css";

const parseButtonMUI = document.getElementById("parseButtonMUI");
const parseButton = document.getElementById("parseButton");
const contentContainer = document.getElementById("container");

function init() {
  parseButtonMUI.addEventListener("click", parseProductsMaterialUI);
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
    ReactDOM.unmountComponentAtNode(contentContainer);
    contentContainer.innerHTML = "";
    contentContainer.appendChild(productContainer);

    productList.products
      .filter((product) => product.style.style == "drop-in")
      .forEach((product) => {
        const productDiv = new VanillaProduct(product);
        productContainer.appendChild(productDiv);
      });
  });
}

function parseProductsMaterialUI() {
  // RUNTIME IMPORT TO SIMULATE API REQUEST. THIS WOULD BE
  // REPLACED WITH FETCH OR ANOTHER API METHOD IN PRODUCTION.
  import(
    /* webpackChunkName: "json_products" */
    "../../products-list.json"
  ).then(({ default: productList }) => {
    const filteredProducts = productList.products.filter(
      (product) => product.style.style === "drop-in"
    );

    ReactDOM.render(
      <ProductGrid products={filteredProducts} />,
      contentContainer
    );
  });
}

init();
