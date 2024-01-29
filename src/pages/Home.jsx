import { Link } from "react-router-dom";

function Home() {
  return (
    <main
      className={`flex flex-grow flex-col content-center justify-center bg-home bg-cover px-6 py-16 text-center font-inter text-white`}
    >
      <h1 className=" text-4xl font-extrabold ">
        You got the travel plans, we got the travel vans.
      </h1>
      <p className="mt-6 text-base font-medium">
        Add adventure to your life by joining the #vanlife movement. Rent the
        perfect van to make your perfect road trip.
      </p>
      <Link
        className="mt-12 self-center rounded bg-orange-430 px-36 py-3 text-center text-base font-bold"
        to={"/vans"}
      >
        Find your van
      </Link>
    </main>
  );
}

export default Home;
