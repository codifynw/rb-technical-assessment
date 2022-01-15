import React from "react";

function Product(props) {
  const product = props.product;
  return (
    <div className="product-container">
      <div className="product-image">
        <img src={product.style.image} alt={product.name} />
      </div>
      <div className="product-info">
        <h3>{product.name}</h3>
        <div>${product.price}</div>
        <p>{product.description}</p>
      </div>
    </div>
  );
}

export { Product };
