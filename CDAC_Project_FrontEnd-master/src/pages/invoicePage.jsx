import CardLoader from "../components/cardLoader";
import InvoiceDenseTable from "../components/table";
import SideBar from "../components/sidebar";
import Divider from "../layouts/divider";
import ResponsiveDialog from "../components/dialog";
import DynamicFormForInvcoie from "../components/form";
import AddIcon from "@mui/icons-material/Add";
import { useEffect, useState } from "react";
import { fetchInvoicesByAdminId,fetchInvoicesStatByAdminId} from "../service/invoice";
import { useDispatch, useSelector } from "react-redux";
import actionIndex from "../features/actionIndex";

function InvoicePage(params) {
  const dispatch=useDispatch();
  const [invoiceStat,setInvoiceState ]=useState([]);
  const loader=useSelector(states=>states.loader.value);
  
  useEffect(() => {
    async function fetchInvoicesStatByAdmin() {
      const adminId = JSON.parse(localStorage.getItem("admin")).admin_id;
      try {
        const InvoiceStatData = await fetchInvoicesStatByAdminId(adminId);
        console.log(InvoiceStatData);
        setInvoiceState(InvoiceStatData);
      } catch (error) {
        console.log(error);
      }
    }
    fetchInvoicesStatByAdmin();
  }, [setInvoiceState,loader]);


  useEffect(() => {
    async function fetchInvoicesByAdmin() {
      const adminId = JSON.parse(localStorage.getItem("admin")).admin_id;
      try {
        const InvoiceData = await fetchInvoicesByAdminId(adminId);
        console.log(InvoiceData);
        dispatch(actionIndex.setInvoices(InvoiceData));
      } catch (error) {
        console.log(error);
      }
    }
    fetchInvoicesByAdmin();
  }, [dispatch,loader]);
  
  return (
    <>
      <SideBar />
      <Divider
        title={params.title}
        component={
          <>
            <ResponsiveDialog
              icon={<AddIcon />}
              title={"Add Invoice"}
              component={<DynamicFormForInvcoie />}
            />
            {invoiceStat?.length>0?<CardLoader count={4} color={"#00aaa0"} invoiceState={invoiceStat}/>:""}
            
            <InvoiceDenseTable />
          </>
        }
      />
    </>
  );
}

export default InvoicePage;
