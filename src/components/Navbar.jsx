import { NavLink } from "react-router-dom";
import "../App.css";

export default function Navbar() {
  const linkClass = ({ isActive }) =>
    "nav-link" + (isActive ? " active" : "");

  return (
    <nav className="navbar">
      <NavLink to="/" className={linkClass} end>
        Home
      </NavLink>
      <NavLink to="/projects" className={linkClass}>
        Projects
      </NavLink>
      <NavLink to="/hobby" className={linkClass}>
        Hobby
      </NavLink>
    </nav>
  );
}
