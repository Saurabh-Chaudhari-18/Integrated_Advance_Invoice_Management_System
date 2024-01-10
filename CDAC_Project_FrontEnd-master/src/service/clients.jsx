import { backendUrl } from "../config/urls";
import axios from "axios";
export async function fetchClinetsByAdminId(id) {
  const res = await axios.get(`${backendUrl}/getAdminClient/${id}`);
  const result = res.data;

  return result;
}

export async function createClinet(data) {
  const res = await axios.post(`${backendUrl}/clients`,data);
  const result = res.data;

  return result;
}

export async function searchClientByName(id,str) {
  const res = await axios.get(`${backendUrl}/searchClient/${id}/${str}`);
  const result = res.data;

  return result;
}
