// src/components/Navbar.jsx
import { Link, NavLink } from "react-router-dom";
import "./Navbar.css";

const Navbar = () => {
  return (
    <nav>
      <div>
        <NavLink to="/" end>Home</NavLink>
        <NavLink to="/auth">Register/Login</NavLink>
        <NavLink to= "/memories">Memories</NavLink>
      </div>
    </nav>
  );
};

export default Navbar;
