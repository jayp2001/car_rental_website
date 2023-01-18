import "./navBar.css";
import { NavLink } from "react-router-dom";
function Navbar() {
  return (
    <div className="navBar">
      <div className="grid content-center h-full">
        <div className="navLink">
          <NavLink
            to="car_rental_website/"
            style={({ isActive }) => ({
              color: isActive ? "black" : "#757474",
            })}
          >
            Home
          </NavLink>
        </div>
      </div>
    </div>
  );
}

export default Navbar;
