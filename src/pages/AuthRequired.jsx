import { Outlet, Navigate } from "react-router-dom";

function AuthRequired() {
  const isLoggedin = localStorage.getItem("loggedIn");

  if (!isLoggedin) {
    return (
      <Navigate
        to="/login"
        state={{ message: "You must log in first" }}
        replace
      />
    );
  }

  return <Outlet />;
}

export default AuthRequired;
