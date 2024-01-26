import { NavLink } from "react-router-dom";
import Logo from "/logo.svg";

function Navbar() {
  return (
    <nav className="flex justify-between bg-orange-50 px-6 py-9">
      <img src={Logo} className="logo max-w-36" />
      <div className="nav-links font-inter text-gray-40 flex gap-5 text-base font-semibold">
        <NavLink
          className={({ isActive }) =>
            isActive
              ? `text-black-40 hover:text-black-40 focus:text-black-40 hover:underline focus:underline`
              : `hover:text-black-40 focus:text-black-40 hover:underline focus:underline`
          }
          to="/"
        >
          Home
        </NavLink>
        <NavLink
          className={({ isActive }) =>
            isActive
              ? `text-black-40 hover:text-black-40 focus:text-black-40 hover:underline focus:underline`
              : `hover:text-black-40 focus:text-black-40 hover:underline focus:underline`
          }
          to="/about"
        >
          About
        </NavLink>
      </div>
    </nav>
  );
}

export default Navbar;
