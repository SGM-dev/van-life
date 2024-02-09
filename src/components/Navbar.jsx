import { Link, NavLink } from "react-router-dom";
import Logo from "/logo.svg";

function Navbar() {
  const activeClass = `text-black-910`;
  const defaultClass = `hover:text-black-910 hover:underline focus:text-black-910 focus:underline`;

  return (
    <header className="flex justify-between px-6 py-9">
      <Link to={"/"}>
        <img src={Logo} alt="VANLIFE Logo" className="logo max-w-36" />
      </Link>
      <nav className="nav-links flex gap-5 font-inter text-base font-semibold text-gray-510">
        <NavLink
          className={({ isActive }) => (isActive ? activeClass : defaultClass)}
          to="/host"
        >
          Host
        </NavLink>
        <NavLink
          className={({ isActive }) => (isActive ? activeClass : defaultClass)}
          to="/about"
        >
          About
        </NavLink>
        <NavLink
          className={({ isActive }) => (isActive ? activeClass : defaultClass)}
          to={"/vans"}
        >
          Vans
        </NavLink>
      </nav>
    </header>
  );
}

export default Navbar;
