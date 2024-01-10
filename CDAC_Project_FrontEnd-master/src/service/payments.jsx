import { backendUrl } from "../config/urls";
import axios from "axios";
export async function fetchPaymentsByAdminId(id) {
  const res = await axios.get(`${backendUrl}/getPaymentsByAdminId/${id}`);
  const result = res.data;

  return result;
}

export async function fetchPaymentsTotalAmount(id) {
  const res = await axios.get(`${backendUrl}/getTotalPaymentAmount/${id}`);
  const result = res.data;

  return result;
}
