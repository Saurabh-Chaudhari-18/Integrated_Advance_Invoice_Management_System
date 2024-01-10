import CardLoader from "../components/cardLoader";
import DenseTable, { ProductsTable } from "../components/table";
import SideBar from "../components/sidebar";
import Divider from "../layouts/divider";
import ResponsiveDialog from "../components/dialog";
import { ProductForm } from "../components/form";
import AddIcon from "@mui/icons-material/Add";
import  {fetchProducts}  from "../service/products";
import { useDispatch } from "react-redux";
import actionIndex from "../features/actionIndex";
import { useEffect } from "react";

export default function ProductsPage(params) {
  const dispatch=useDispatch();

  useEffect(() => {
    async function fetchProd() {
      const adminId = JSON.parse(localStorage.getItem("admin")).admin_id;
      try {
        const ProductsData = await fetchProducts();
        console.log(ProductsData);
        dispatch(actionIndex.setProducts(ProductsData));
      } catch (error) {
        console.log(error);
      }
    }
    fetchProd();
  }, [dispatch]);
  return (
    <>
      <SideBar />
      <Divider
        title={params.title}
        component={
          <>
            <ResponsiveDialog
              icon={<AddIcon />}
              title={"Add Products"}
              component={<ProductForm />}
            />
            <ProductsTable/>
          </>
        }
      />
    </>
  );
}
