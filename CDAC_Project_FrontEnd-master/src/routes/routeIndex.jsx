import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import DashboardPage from "../pages/dashboardPage";
import LoginPage from "../pages/loginPage";
import InvoicePage from "../pages/invoicePage";
import ClientPage from "../pages/clientsPage";
import PaymentsPage from "../pages/paymentsPage";
import ProductsPage from "../pages/productsPage";
import SignUpPage from "../pages/signupPage";

function RoutesIndex(params) {
  const routeObject = [
    { name: "LoginPage", path: "/", component: <LoginPage name={"LoginPage"} title={"Login Page"}/>,params:[]},
    { name: "LoginPage", path: "/login", component: <LoginPage name={"LoginPage"} title={"Login Page"}/>,params:[]},
    { name: "DashboardPage", path: "/dashboard", component: <DashboardPage title={"Dashboard Page"} />},
    { name: "InvoicePage", path: "/invoices", component: <InvoicePage title={"Invoice Page"}/>},
    { name: "ClientPage", path: "/clients", component: <ClientPage title={"Client Page"}/>},
    { name: "PaymentsPage", path: "/payments", component: <PaymentsPage title={"Payments Page"}/>},
    { name: "ProductsPage", path: "/products", component: <ProductsPage title={"Products Page"}/>},
    { name: "SignUpPage", path: "/signup", component: <SignUpPage title={"SignUp Page"}/>},
   
  ];

  /**
   * `Route functionality` for route component.
   * Function for maping the route in routes.
   * Add new route object in `routesObject` variable.
   * Add the params in params array sequencially.
   * For `no params` assign `empty array` to `params` or juts ignore adding `params` key in object. 
   */
  function getRoutes() {
    return routeObject.map((item) => {
      if(!item.params?.length>0) {
        return <Route path={item.path} element={item.component} />;
      }
     
    });
  }
  return (
    <Router>
      <Routes>{getRoutes()}</Routes>
    </Router>
  );
}

export default RoutesIndex;
