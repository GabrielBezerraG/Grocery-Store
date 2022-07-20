import updateShoppingCart from "./updateShoppingCart.js";
import updateProductsCount from "./updateProductsCount.js";

import { shoppingCartArray } from "./shoppingCartArray.js";


export default function createProduct(product, categoryList) {
   const productArticle = document.createElement('article');
   productArticle.classList.add('product');
   productArticle.innerHTML = `<a href="#" class="product__image"></a>
   <h3 class="product__name">${product.name}</h3>
   <p class="product__price">$${product.price}</p>
   <input type="button" value="Add To Cart" class="product__button button">`;
   const productImage = productArticle.querySelector('.product__image');
   productImage.style.backgroundImage = `url(./assets/products/${product.image}.jpg)`;
   const productButton = productArticle.querySelector('.product__button');

   productButton.addEventListener('click', ()=> {
      
      let hasProduct = false;
      shoppingCartArray.forEach(item => {
         if (item.name == product.name) {
            item.quantity += 1;
            hasProduct = true;
            updateShoppingCart();  
            updateProductsCount();
            return;
         }
      })
      if (!hasProduct) {
         product.quantity = 1;
         shoppingCartArray.push(product);
         updateShoppingCart();  
         updateProductsCount();
      }
   })
   
   categoryList.appendChild(productArticle);
}