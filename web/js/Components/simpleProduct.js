import "./simpleProduct.css";

// COMPONENT WITH DESTRUCTURED PROPERTIES
export const SimpleProduct = (
  product = {
    name: "Product Name",
    description: "Product Description.",
    sku: "SKU-001",
    style: {
      color: "artisan silver washed gold",
      image: "web/img/sku001.jpg",
      style: "drop-in",
    },
    qty: "0",
    price: "99.99",
  }
) => {
  const innerTemplate = function (product) {
    return `
        <div class="product-image">
            <img src="${product.style.image}" alt="${product.name}">
        </div>
        <div class="product-info">
            <h3>${product.name}</h3>
            <div>$${product.price}</div>
            <p>${product.description}</p>
        </div>`;
  };

  const onClick = function () {
    console.log("clicked");
  };

  const productElement = document.createElement("div");
  productElement.innerHTML = innerTemplate(product);
  productElement.classList.add(`product`, `${product.style.style}`);
  productElement.addEventListener("click", onClick);
  return productElement;
};

// CLASS COMPONENT
// export class SimpleProduct {
//   constructor(product) {
//     const productElement = document.createElement("div");
//     productElement.classList.add(`product`, `${product.style.style}`);
//     productElement.innerHTML = this.fillProductElement(product);
//     this.addEventListeners();
//     return productElement;
//   }

//   fillProductElement(product) {
//     return `
//         <div class="product-image">
//             <img src="${product.style.image}" alt="${product.name}">
//         </div>
//         <div class="product-info">
//             <h3>${product.name}</h3>
//             <div>$${product.price}</div>
//             <p>${product.description}</p>
//         </div>`;
//   }

//   addEventListeners(productElement) {
//     console.log("add listened");
//   }
// }
