import axios from "axios";
import {
  modalContainer,
  modalContainerShadow,
  modalContainerContent,
} from "./elements";

const fetchSingleProduct = async (id) => {
  let res = await axios.get(`https://dummyjson.com/products/${id}`);
  let product = res.data;
  let title = product.title;
  let description = product.description;
  let stock = product.stock;
  let category = product.category;
  let images = product.images;
  images.unshift(images.pop());
  let oldPrice = product.price.toFixed(2);
  let newPrice = (
    product.price -
    (product.price * product.discountPercentage) / 100
  ).toFixed(2);
  modalContainerContent.innerHTML = `
    <h3>${title}</h3>
    <a href="/category/${category}" class="category"> ${category} </a>
    <div class="modal-gallery">
      <div>
        <img
          id="modal-big-image"
          src="${images[0]}"
            alt="${title}"
        />
      </div>
      <div class="modal-gallery__grid">
        ${images
          .map((image, index) => {
            return `<img class="${
              index === 0 ? "active" : ""
            }" src="${image}" />`;
          })
          .join("")}
      </div>
    </div>
    <p class="description">
      ${description}
    </p>
    <div class="prices">
      <div class="prices-old-price">$${oldPrice}</div>
      <div class="prices-current-price">$${newPrice}</div>
          <div class="prices-in-stock">Stock: ${stock}</div>
    </div>
    <button class="btn">
      <i class="bx bxs-cart-download"></i>
      Buy
    </button>
  `;
  modalContainer.classList.add("show");
  modalContainerShadow.onclick = (event) => {
    modalContainer.classList.remove("show");
  };
};

export default fetchSingleProduct;
