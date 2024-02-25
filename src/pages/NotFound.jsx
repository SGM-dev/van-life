import { Link } from "react-router-dom";

function NotFound() {
  return (
    <main className=" container flex flex-grow flex-col justify-center p-8 font-inter font-bold">
      <h1 className=" text-3xl">
        Sorry, the page you were looking for was not found.
      </h1>
      <Link
        to={"/"}
        className="mt-5 cursor-pointer rounded bg-black-910 py-2 text-center text-lg text-white"
      >
        Return to home
      </Link>
    </main>
  );
}

export default NotFound;
