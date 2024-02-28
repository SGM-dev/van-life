import { Link, NavLink } from "react-router-dom";
import Logo from "/logo.svg";
import Avatar from "/avatar.svg";

function Navbar() {
  const activeClass = `text-black-910 underline underline-offset-2 font-bold`;
  const defaultClass = `hover:text-black-910 hover:underline hover:font-bold focus:text-black-910 focus:underline underline-offset-2`;

  function fakeLogOut() {
    localStorage.removeItem("loggedIn");
  }

  return (
    <header className="flex items-center justify-between px-6 py-9">
      <Link to={"/"}>
        <img src={Logo} alt="VANLIFE Logo" className="logo max-h-4 " />
      </Link>
      <nav className="nav-links flex gap-5 font-inter text-base font-medium text-gray-510">
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
          to="/vans"
        >
          Vans
        </NavLink>
        <Link to={"/login"}>
          <img
            src={Avatar}
            alt="User Avatar"
            className="logo inline-flex items-center"
          />
        </Link>
        <button
          className=" rounded bg-orange-430 px-1 py-1 text-base font-medium text-white"
          onClick={fakeLogOut}
        >
          Log Out
        </button>
      </nav>
    </header>
  );
}

export default Navbar;
