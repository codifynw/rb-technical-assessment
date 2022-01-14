export const simpleProduct = function (product) {
  return `
    <div class="product-image">
        <img src="${product.style.image}" alt="${product.name}">
    </div>
    <div class="product-info">
        <h3>${product.name}</h3>
        <div>${product.price}</div>
        <p>${product.description}</p>
    </div>`;
};
