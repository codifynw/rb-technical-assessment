import "../../css/vanilla/product.css";

// CLASS COMPONENT
export class VanillaProduct {
  constructor(product) {
    const productElement = document.createElement("div");
    productElement.classList.add(`product`, `${product.style.style}`);
    productElement.innerHTML = this.fillProductElement(product);
    this.addEventListeners(productElement);
    return productElement;
  }

  fillProductElement(product) {
    return `
        <div class="product-image-wrap" title="${product.name}">
            <img class="product-image" src="${product.style.image}">
        </div>
        <div class="product-info">
            <h3>${product.name}</h3>
            <div>$${product.price}</div>
            <p>${product.description}</p>
        </div>`;
  }

  addEventListeners(productElement) {
    productElement.addEventListener("click", () => {
      console.log("Clicked on product");
    });
  }
}
