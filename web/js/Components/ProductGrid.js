import React from "react";
import { Product } from "./Product";

function ProductGrid(props) {
  const products = props.products;
  console.log(products);
  return (
    <div className="product-container">
      {products.map((product) => (
        <Product key={product.sku} product={product} />
      ))}
    </div>
  );
}

export { ProductGrid };
