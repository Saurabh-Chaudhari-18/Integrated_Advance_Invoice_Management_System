import DenseTable, { ClientTable } from "../components/table";
import SideBar from "../components/sidebar";
import Divider from "../layouts/divider";
import ResponsiveDialog from "../components/dialog";
import { ClientForm } from "../components/form";
import AddIcon from "@mui/icons-material/Add";
import { useEffect } from "react";
import { fetchClinetsByAdminId } from "../service/clients";
import { useDispatch, useSelector } from "react-redux";
import actionIndex from "../features/actionIndex";

export default function ClientPage(params) {
  const dispatch=useDispatch();
  const clients = useSelector((states) => states.client.value);
  const loader=useSelector((states)=>states.loader.value);
  useEffect(() => {
    async function fetchClientByAdmin() {
      const adminId = JSON.parse(localStorage.getItem("admin")).admin_id;
      try {
        const clientsData = await fetchClinetsByAdminId(adminId);
        dispatch(actionIndex.setClientList(clientsData));
      } catch (error) {
        console.log(error);
      }
    }
    fetchClientByAdmin();
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
              title={"Add Clients"}
              component={<ClientForm />}
            />
            <ClientTable />
          </>
        }
      />
    </>
  );
}
