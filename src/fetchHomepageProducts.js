import axios from "axios";
import { homepageProducts } from "./elements";

const fetchHomepageProducts = async () => {
  let res = await axios.get("https://dummyjson.com/products?limit=12");
  let products = res.data.products;
  products.forEach((product) => {
    let id = product.id;
    let title = product.title;
    let category = product.category;
    let thumbnail = product.thumbnail;
    let oldPrice = product.price.toFixed(2);
    let newPrice = (
      product.price -
      (product.price * product.discountPercentage) / 100
    ).toFixed(2);
    homepageProducts.innerHTML += `
    <div class="product-card">
        <a href="/asdasd" class="product-card__category">
            ${category}
        </a>
        <img
            src="${thumbnail}"
            alt="${title}"
        />
        <h4>
            <a href="/product/${id}"> ${title} </a>
        </h4>
        <div class="prices">
            <div class="prices-old-price">$${oldPrice}</div>
            <div class="prices-current-price">$${newPrice}</div>
        </div>
        <button class="btn">
            <i class="bx bxs-cart-download"></i>
            Buy
        </button>
    </div>`;
  });
};

export default fetchHomepageProducts;
