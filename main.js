import "./sass/style.scss";
import Glide from "@glidejs/glide";
import Aos from "aos";
import fetchCategories from "./src/fetchCategories";
import {
  categoriesButton,
  categoriesList,
  categoriesUnderlay,
} from "./src/elements";
import fetchHomepageProducts from "./src/fetchHomepageProducts";
import fetchSingleProduct from "./src/fetchSingleProduct";

new Glide(".glide").mount();

categoriesButton.onclick = (event) => {
  //   event.preventDefault();
  categoriesUnderlay.classList.add("open");
  categoriesList.classList.add("open");
  if (event.target === categoriesUnderlay) {
    categoriesUnderlay.classList.remove("open");
    categoriesList.classList.remove("open");
  }
};

fetchCategories();

fetchHomepageProducts().then(() => {
  const productCards = document.querySelectorAll(".product-card");
  productCards.forEach((card) => {
    card.onclick = (event) => {
      event.preventDefault();
      let href = event.target.href;
      let lastSlashIndex = href.lastIndexOf("/");
      let id = href.substr(lastSlashIndex + 1);
      fetchSingleProduct(id).then(() => {
        const bigImage = document.querySelector("#modal-big-image");
        const smallImages = document.querySelectorAll(
          ".modal-gallery__grid img"
        );
        smallImages.forEach((img) => {
          img.onclick = (event) => {
            document
              .querySelector(".modal-gallery__grid img.active")
              .classList.remove("active");
            event.target.classList.add("active");
            bigImage.src = event.target.src;
          };
        });
      });
    };
  });
});
