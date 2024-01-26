import { NavLink } from "react-router-dom";
import Logo from "/logo.svg";

function Navbar() {
  return (
    <header className="flex justify-between bg-orange-50 px-6 py-9">
      <img src={Logo} className="logo max-w-36" />
      <nav className="nav-links flex gap-5 font-inter text-base font-semibold text-gray-510">
        <NavLink
          className={({ isActive }) =>
            isActive
              ? `text-black-910 hover:text-black-910 hover:underline focus:text-black-910 focus:underline`
              : `hover:text-black-910 hover:underline focus:text-black-910 focus:underline`
          }
          to="/"
        >
          Home
        </NavLink>
        <NavLink
          className={({ isActive }) =>
            isActive
              ? `text-black-910 hover:text-black-910 hover:underline focus:text-black-910 focus:underline`
              : `hover:text-black-910 hover:underline focus:text-black-910 focus:underline`
          }
          to="/about"
        >
          About
        </NavLink>
      </nav>
    </header>
  );
}

export default Navbar;
