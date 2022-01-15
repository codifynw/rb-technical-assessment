// CLASS COMPONENT
export class VanillaProduct {
  constructor(product) {
    const productElement = document.createElement("div");
    productElement.classList.add(`product`, `${product.style.style}`);
    productElement.innerHTML = this.fillProductElement(product);
    this.addEventListeners();
    return productElement;
  }

  fillProductElement(product) {
    return `
        <div class="product-image">
            <img src="${product.style.image}" alt="${product.name}">
        </div>
        <div class="product-info" onClick=${this.handleClick}>
            <h3>${product.name}</h3>
            <div>$${product.price}</div>
            <p>${product.description}</p>
        </div>`;
  }

  handleClick() {
    console.log("click");
  }

  addEventListeners(productElement) {
    console.log("add listened");
  }
}
