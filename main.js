import "./sass/style.scss";
import Glide from "@glidejs/glide";
import Aos from "aos";
import fetchCategories from "./src/fetchCategories";
import {
  categoriesButton,
  categoriesList,
  categoriesUnderlay,
} from "./src/elements";

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
