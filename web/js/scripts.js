import React from "react";
import ReactDOM from "react-dom";
import { ProductGrid } from "./Components/ProductGrid";

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
    const filteredProducts = productList.products.filter(
      (product) => product.style.style == "drop-in"
    );

    ReactDOM.render(
      <ProductGrid products={filteredProducts} />,
      contentContainer
    );
  });
}

init();
