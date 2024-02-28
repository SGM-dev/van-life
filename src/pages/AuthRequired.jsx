import { Outlet, Navigate, useLocation } from "react-router-dom";

function AuthRequired() {
  const isLoggedIn = localStorage.getItem("loggedIn");
  const location = useLocation();

  if (!isLoggedIn) {
    return (
      <Navigate
        to="/login"
        state={{ from: location.pathname, message: "You must log in first" }}
        replace
      />
    );
  }

  return <Outlet />;
}

export default AuthRequired;
