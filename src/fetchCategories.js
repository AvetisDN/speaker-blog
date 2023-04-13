import axios from "axios";
import { categoriesList } from "./elements";

const fetchCategories = async () => {
  let res = await axios.get("https://dummyjson.com/products/categories");
  let categories = res.data;
  categories.forEach((category) => {
    categoriesList.innerHTML += `<a href="/${category}"> ${category.replace(
      "-",
      " "
    )} </a>`;
  });
};

export default fetchCategories;
