import { backendUrl } from "../config/urls";
import axios from "axios";
export async function fetchInvoicesByAdminId(id) {
  const res = await axios.get(`${backendUrl}/getInvoicesByAdmin/${id}`);
  const result = res.data;

  return result;
}
export async function fetchInvoicesStatByAdminId(id) {
  const res = await axios.get(`${backendUrl}/getInvoiceStatByAdminId/${id}`);
  const result = res.data;

  return result;
}

export async function fetchInvoicesAmountStatByAdminId(id) {
  const res = await axios.get(`${backendUrl}/getAmountStatsInInvoices/${id}`);
  const result = res.data;

  return result;
}
export async function createInvoice(data) {
  const res = await axios.post(`${backendUrl}/invoices`,data);
  const result = res.data;

  return result;
}