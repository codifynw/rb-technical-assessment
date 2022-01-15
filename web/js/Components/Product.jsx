class Product {
    constructor(props) {
      return this;
    }
  
    changeBackground = function (background) {
    };
  
    changeAspectRatio = function (value) {
    };
  
    render() {
      return (
        <div>
            <div class="product-image">
                <img src="${product.style.image}" alt="${product.name}">
            </div>
            <div class="product-info">
                <h3>${product.name}</h3>
                <div>$${product.price}</div>
                <p>${product.description}</p>
            </div>
        </div>
      );
    }
  }
  
  // This is used to render JSX into the DOM in the browser.
  function createElement(tagName, attrs = {}, ...children) {
    const element = Object.assign(document.createElement(tagName), attrs);
  
    Object.entries(attrs || {}).forEach(([name, value]) => {
      if (name.startsWith("on") && name.toLowerCase() in window) element.addEventListener(name.toLowerCase().substr(2), value);
      else element.setAttribute(name, value.toString());
    });
  
    for (const child of children) {
      if (Array.isArray(child)) element.append(...child);
      else element.append(child);
    }
  
    return element;
  }
  