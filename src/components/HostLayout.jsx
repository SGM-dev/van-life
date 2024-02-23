import { NavLink, Outlet } from "react-router-dom";

function HostLayout() {
  const activeClass = `text-black-910 underline underline-offset-2 font-bold`;
  const defaultClass = `hover:text-black-910 hover:underline hover:font-bold focus:text-black-910 focus:underline underline-offset-2`;

  return (
    <div className=" flex-shrink-0 flex-grow px-6 py-2">
      <nav className="nav-links flex gap-5 font-inter text-base font-medium text-gray-510">
        <NavLink
          className={({ isActive }) => (isActive ? activeClass : defaultClass)}
          to="."
          end={true}
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
          to="reviews"
        >
          Reviews
        </NavLink>
      </nav>
      <Outlet />
    </div>
  );
}

export default HostLayout;
