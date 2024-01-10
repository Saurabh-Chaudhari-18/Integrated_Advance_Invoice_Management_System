import { Link } from "react-router-dom";
import "../assets/styles/Navbar/navBar.css";

function NavBar(props) {
  function NavItemsRenderer(params) {
    if (props.navObj.length > 0) {
      return props.navObj.map((item) => {
        return (
          <div className="navbar-item">
            <Link to={item.url}>{item.name}</Link>
          </div>
        );
      });
    }
  }

  return (
    <>
      <div className="navbar-container">
        <div className="navbar-outer navbar-hover">
          <NavItemsRenderer />
        </div>
      </div>
    </>
  );
}

export default NavBar;
