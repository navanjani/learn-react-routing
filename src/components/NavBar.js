import { Link, NavLink } from "react-router-dom";
import "../App.css";

const NavBar = () => {
  return (
    <div className="navbar">
      <ul>
        <li>
          {" "}
          <NavLink className="navItem" to="/">
            Home
          </NavLink>
        </li>
        <li>
          <Link className="navItem" to="/about">
            About
          </Link>
        </li>
        <li>
          <Link className="navItem" to="/contact">
            Contact
          </Link>
        </li>
      </ul>
    </div>
  );
};
export default NavBar;
