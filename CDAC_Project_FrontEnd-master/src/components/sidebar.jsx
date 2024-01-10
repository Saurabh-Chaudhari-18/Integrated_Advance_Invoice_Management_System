import "../assets/styles/sidebar/sidebar.css";
import logo from "../assets/img-ref/logo.png";
import Avatar from "@mui/material/Avatar";

import { icons } from "../assets/img-ref/imges";
import { Link } from "react-router-dom";
function SideBar(params) {
  const user = JSON.parse(localStorage.getItem("admin"));

  return (
    <>
      <div class="sideBar_wrapper">
        {/* <div className="sidebar_logo_wrapper">
          <img src={logo} alt="logo" class="sidebar_logo" />
          <div className="company_name">Vconstruct</div>
        </div> */}
        <div className="sidebar_avatar">
          <Avatar
            alt="Remy Sharp"
            src="https://images.unsplash.com/photo-1600180758890-6b94519a8ba6?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1170&q=80"
            sx={{ width: 56, height: 56 }}
          />
          <div className="company_name">
            Hello {JSON.parse(localStorage.getItem("admin"))?.admin_name}
          </div>
        </div>

        <div className="sidebar_container">
          <div className="sidebar_item">
            <div className="sidebar_icon">{icons.dash}</div>
            <div className="sidebar_text">
              <Link to="/dashboard">Dashboard</Link>{" "}
            </div>
          </div>
          {user?.client_id ? (
            ""
          ) : <div className="sidebar_item">
          <div className="sidebar_icon">{icons.clients}</div>
          <div className="sidebar_text">
            <Link to="/clients">Client</Link>{" "}
          </div>
        </div>}

          <div className="sidebar_item">
            <div className="sidebar_icon">{icons.invoice}</div>
            <div className="sidebar_text">
              <Link to="/invoices">Invoice</Link>{" "}
            </div>
          </div>
          <div className="sidebar_item">
            <div className="sidebar_icon">{icons.payments}</div>
            <div className="sidebar_text">
              <Link to="/payments"> Payments</Link>
            </div>
          </div>
          {user?.client_id?"":<div className="sidebar_item">
            <div className="sidebar_icon">{icons.products}</div>
            <div className="sidebar_text">
              <Link to="/products">Products</Link>{" "}
            </div>
          </div>}
          <div className="sidebar_item">
            <div className="sidebar_icon">{icons.reports}</div>
            <div className="sidebar_text">
              <Link to="#">Reports</Link>{" "}
            </div>
          </div>
          <div className="sidebar_item">
            <div className="sidebar_icon">{icons.settings}</div>
            <div className="sidebar_text">
              <Link to="#">Settings</Link>{" "}
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default SideBar;
