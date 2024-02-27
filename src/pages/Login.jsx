import { useNavigate, useLocation } from "react-router-dom";
import { useState } from "react";

function Login() {
  const [loginFormData, setLoginFormData] = useState({
    email: "",
    password: "",
  });

  const location = useLocation();

  function handleSubmit(e) {
    e.preventDefault();
    console.log(loginFormData);
  }

  function handleChange(e) {
    const { name, value } = e.target;
    setLoginFormData((prev) => ({
      ...prev,
      [name]: value,
    }));
  }

  return (
    <main className="container mx-auto my-0 flex flex-grow flex-col justify-center gap-4 px-8 font-inter">
      {location.state?.message && (
        <h3 className=" mb-2 text-center text-xl font-semibold text-red-700 antialiased sm:gap-6">
          {location.state.message}
        </h3>
      )}
      <h1 className=" mb-2 text-center text-3xl font-bold sm:gap-6">
        Sign in to your account
      </h1>
      <form onSubmit={handleSubmit} className="flex w-full flex-grow flex-col">
        <input
          name="email"
          onChange={handleChange}
          type="email"
          placeholder="Email Address"
          value={loginFormData.email}
          className=" rounded-t border px-3 py-2 text-base font-normal text-gray-510 shadow-sm"
        ></input>
        <input
          name="password"
          onChange={handleChange}
          type="password"
          placeholder="Password"
          value={loginFormData.password}
          className=" rounded-b border px-3 py-2 text-base font-normal text-gray-510 shadow-sm"
        />
        <button className="mt-2 rounded bg-orange-430 py-3 text-base font-bold text-white sm:mt-4">
          Log in
        </button>
      </form>
    </main>
  );
}

export default Login;
