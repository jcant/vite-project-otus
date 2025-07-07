import { APP_CONFIG } from "@/constants";
import axios from "axios";

async function getProductsData() {
  let products;
  await axios
    .get(APP_CONFIG.remote_products_url + "/products")
    .then((response) => {
      products = response.data;
    });
  return products;
}

async function getProductData(id) {
  let product;
  await axios
    .get(`${APP_CONFIG.remote_products_url}/products/${id}`)
    .then((response) => {
      product = response.data;
    });
  return product;
}

export { getProductsData, getProductData };
