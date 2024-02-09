import { NavLink, Outlet, useLocation } from "react-router-dom";

function HostLayout() {
  const { pathname } = useLocation();
  const activeClass = `text-black-910 hover:text-black-910 hover:underline focus:text-black-910 focus:underline`;
  const defaultClass = `hover:text-black-910 hover:underline focus:text-black-910 focus:underline`;

  return (
    <div className=" px-6 py-9">
      <nav className="nav-links flex gap-5 font-inter text-base font-semibold text-gray-510">
        <NavLink
          className={({ isActive }) =>
            isActive && pathname === "/host" ? activeClass : defaultClass
          }
          to="/host"
        >
          Dashboard
        </NavLink>
        <NavLink
          className={({ isActive }) => (isActive ? activeClass : defaultClass)}
          to="/host/income"
        >
          Income
        </NavLink>
        <NavLink
          className={({ isActive }) => (isActive ? activeClass : defaultClass)}
          to={"/host/reviews"}
        >
          Reviews
        </NavLink>
      </nav>
      <Outlet />
    </div>
  );
}

export default HostLayout;
