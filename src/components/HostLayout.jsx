import { NavLink, Outlet } from "react-router-dom";

function HostLayout() {
  const activeClass = `text-black-910`;
  const defaultClass = `hover:text-black-910 hover:underline focus:text-black-910 focus:underline`;

  return (
    <div className=" flex-shrink-0 flex-grow px-6 py-2">
      <nav className="nav-links flex gap-5 font-inter text-base font-semibold text-gray-510">
        <NavLink
          className={({ isActive }) => (isActive ? activeClass : defaultClass)}
          to="."
          end
        >
          Dashboard
        </NavLink>
        <NavLink
          className={({ isActive }) => (isActive ? activeClass : defaultClass)}
          to="income"
        >
          Income
        </NavLink>
        <NavLink
          className={({ isActive }) => (isActive ? activeClass : defaultClass)}
          to="vans"
        >
          Vans
        </NavLink>
        <NavLink
          className={({ isActive }) => (isActive ? activeClass : defaultClass)}
          to={"reviews"}
        >
          Reviews
        </NavLink>
      </nav>
      <Outlet />
    </div>
  );
}

export default HostLayout;
