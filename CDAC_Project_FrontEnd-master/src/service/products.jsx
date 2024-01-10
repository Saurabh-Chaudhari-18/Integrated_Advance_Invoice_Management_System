import { backendUrl } from "../config/urls";
import axios from "axios";
export async function fetchProducts() {
  const res = await axios.get(`${backendUrl}/products`);
  const result = res.data;

  return result;
}

export async function createProducts(data) {
  const res = await axios.post(`${backendUrl}/products`,data);
  const result = res.data;

  return result;
}

export async function searchProducts(str) {
  const res = await axios.get(`${backendUrl}/searchProduct/${str}`);
  const result = res.data;

  return result;
}