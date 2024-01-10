import BarsDataset from "../components/bars";
import CardLoader from "../components/cardLoader";
import BasicLineChart from "../components/lines";
import BasicPie from "../components/pie";
import SideBar from "../components/sidebar";
import Divider from "../layouts/divider";
import Chip from "@mui/material/Chip";
import { useEffect, useState } from "react";
import "../assets/styles/Dashboard/dashboard.scss";
import {
  fetchInvoicesAmountStatByAdminId,
  fetchInvoicesStatByAdminId,
} from "../service/invoice";
import {  useNavigate } from "react-router-dom";
export default function DashboardPage(params) {
  const [invoiceStat, setInvoiceState] = useState([]);
  const [invoiceAmountStat, setInvoiceAmountStat] = useState([]);
  const navigate=useNavigate();
  useEffect(()=>{
    if(!JSON.parse(localStorage.getItem('admin'))){
      navigate('/login');
    }
  })
  useEffect(() => {
    async function fetchInvoicesStatByAdmin() {
      const adminId = JSON.parse(localStorage.getItem("admin"))?.admin_id;
      try {
        const InvoiceStatData = await fetchInvoicesStatByAdminId(adminId);
        console.log(InvoiceStatData);
        setInvoiceState(InvoiceStatData);
      } catch (error) {
        console.log(error);
      }
    }
    fetchInvoicesStatByAdmin();
  }, [setInvoiceState]);

  useEffect(() => {
    async function fetchInvoicesAmountStatByAdmin() {
      const adminId = JSON.parse(localStorage.getItem("admin"))?.admin_id;
      try {
        const InvoiceAmountStatData = await fetchInvoicesAmountStatByAdminId(
          adminId
        );
        console.log("========>",InvoiceAmountStatData);
        setInvoiceAmountStat(InvoiceAmountStatData);
      } catch (error) {
        console.log(error);
      }
    }
    fetchInvoicesAmountStatByAdmin();
  }, [setInvoiceAmountStat]);

  return (
    <>
      <SideBar />
      <Divider
        title={params.title}
        component={
          <>
            <Chip label="Invoice amount overview" />
            {/* <CardLoader count={4} /> */}
            {invoiceAmountStat?.length > 0 ? (
              <div className="cards_container">
                <div
                  class="card"
                 
                >
                  <div class="title">
                    <span>
                      <svg
                        width="20"
                        fill="currentColor"
                        height="20"
                        viewBox="0 0 1792 1792"
                        xmlns="http://www.w3.org/2000/svg"
                      >
                        <path d="M1362 1185q0 153-99.5 263.5t-258.5 136.5v175q0 14-9 23t-23 9h-135q-13 0-22.5-9.5t-9.5-22.5v-175q-66-9-127.5-31t-101.5-44.5-74-48-46.5-37.5-17.5-18q-17-21-2-41l103-135q7-10 23-12 15-2 24 9l2 2q113 99 243 125 37 8 74 8 81 0 142.5-43t61.5-122q0-28-15-53t-33.5-42-58.5-37.5-66-32-80-32.5q-39-16-61.5-25t-61.5-26.5-62.5-31-56.5-35.5-53.5-42.5-43.5-49-35.5-58-21-66.5-8.5-78q0-138 98-242t255-134v-180q0-13 9.5-22.5t22.5-9.5h135q14 0 23 9t9 23v176q57 6 110.5 23t87 33.5 63.5 37.5 39 29 15 14q17 18 5 38l-81 146q-8 15-23 16-14 3-27-7-3-3-14.5-12t-39-26.5-58.5-32-74.5-26-85.5-11.5q-95 0-155 43t-60 111q0 26 8.5 48t29.5 41.5 39.5 33 56 31 60.5 27 70 27.5q53 20 81 31.5t76 35 75.5 42.5 62 50 53 63.5 31.5 76.5 13 94z"></path>
                      </svg>
                    </span>
                    <p class="title-text">Amount Due</p>
                  </div>
                  <div class="data">
                    <p>{invoiceAmountStat[0][0]}</p>
                  </div>
                </div>
                <div
                  class="card"
                >
                  <div class="title">
                    <span>
                      <svg
                        width="20"
                        fill="currentColor"
                        height="20"
                        viewBox="0 0 1792 1792"
                        xmlns="http://www.w3.org/2000/svg"
                      >
                        <path d="M1362 1185q0 153-99.5 263.5t-258.5 136.5v175q0 14-9 23t-23 9h-135q-13 0-22.5-9.5t-9.5-22.5v-175q-66-9-127.5-31t-101.5-44.5-74-48-46.5-37.5-17.5-18q-17-21-2-41l103-135q7-10 23-12 15-2 24 9l2 2q113 99 243 125 37 8 74 8 81 0 142.5-43t61.5-122q0-28-15-53t-33.5-42-58.5-37.5-66-32-80-32.5q-39-16-61.5-25t-61.5-26.5-62.5-31-56.5-35.5-53.5-42.5-43.5-49-35.5-58-21-66.5-8.5-78q0-138 98-242t255-134v-180q0-13 9.5-22.5t22.5-9.5h135q14 0 23 9t9 23v176q57 6 110.5 23t87 33.5 63.5 37.5 39 29 15 14q17 18 5 38l-81 146q-8 15-23 16-14 3-27-7-3-3-14.5-12t-39-26.5-58.5-32-74.5-26-85.5-11.5q-95 0-155 43t-60 111q0 26 8.5 48t29.5 41.5 39.5 33 56 31 60.5 27 70 27.5q53 20 81 31.5t76 35 75.5 42.5 62 50 53 63.5 31.5 76.5 13 94z"></path>
                      </svg>
                    </span>
                    <p class="title-text">Amount Paid</p>
                  </div>
                  <div class="data">
                    <p>{invoiceAmountStat[0][1]}</p>
                  </div>
                </div>
                <div
                  class="card"
                >
                  <div class="title">
                    <span>
                      <svg
                        width="20"
                        fill="currentColor"
                        height="20"
                        viewBox="0 0 1792 1792"
                        xmlns="http://www.w3.org/2000/svg"
                      >
                        <path d="M1362 1185q0 153-99.5 263.5t-258.5 136.5v175q0 14-9 23t-23 9h-135q-13 0-22.5-9.5t-9.5-22.5v-175q-66-9-127.5-31t-101.5-44.5-74-48-46.5-37.5-17.5-18q-17-21-2-41l103-135q7-10 23-12 15-2 24 9l2 2q113 99 243 125 37 8 74 8 81 0 142.5-43t61.5-122q0-28-15-53t-33.5-42-58.5-37.5-66-32-80-32.5q-39-16-61.5-25t-61.5-26.5-62.5-31-56.5-35.5-53.5-42.5-43.5-49-35.5-58-21-66.5-8.5-78q0-138 98-242t255-134v-180q0-13 9.5-22.5t22.5-9.5h135q14 0 23 9t9 23v176q57 6 110.5 23t87 33.5 63.5 37.5 39 29 15 14q17 18 5 38l-81 146q-8 15-23 16-14 3-27-7-3-3-14.5-12t-39-26.5-58.5-32-74.5-26-85.5-11.5q-95 0-155 43t-60 111q0 26 8.5 48t29.5 41.5 39.5 33 56 31 60.5 27 70 27.5q53 20 81 31.5t76 35 75.5 42.5 62 50 53 63.5 31.5 76.5 13 94z"></path>
                      </svg>
                    </span>
                    <p class="title-text">Amount Total</p>
                  </div>
                  <div class="data">
                    <p>{invoiceAmountStat[0][2]}</p>
                  </div>
                </div>
              </div>
            ) : (
              ""
            )}
            <Chip label="Invoices overview" />
            {invoiceStat?.length > 0 ? (
              <CardLoader
                count={4}
                color={"#00aaa0"}
                invoiceState={invoiceStat}
              />
            ) : (
              ""
            )}
            <div className="stats_container">
              <div className="line_container">
                <BasicLineChart />
                <div>Payment Overview</div>
              </div>
              <div className="bar_container">
                <BarsDataset />
                Yearly Invoice Data
              </div>
              <div className="pie_container">
                <BasicPie invoiceState={invoiceStat}/>
                <div>Invoice Overview</div>
              </div>
            </div>
          </>
        }
      />
    </>
  );
}
