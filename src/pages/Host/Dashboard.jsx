import { Link } from "react-router-dom";
import { BsStarFill } from "react-icons/bs";
import { getHostVans } from "../../api";
import { useEffect, useState } from "react";

function Dashboard() {
  const [vans, setVans] = useState([]);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);

  useEffect(() => {
    async function loadHostVans() {
      setLoading(true);
      try {
        const data = await getHostVans();
        setVans(data);
      } catch (err) {
        setError(err);
      } finally {
        setLoading(false);
      }
    }
    loadHostVans();
  }, []);

  if (loading) {
    return (
      <main className="flex flex-grow items-center justify-center bg-orange-50 px-7 py-4 font-inter">
        <h2
          className=" mx-auto self-center font-inter text-3xl font-bold"
          aria-live="polite"
        >
          Loading...
        </h2>
      </main>
    );
  }

  if (error) {
    return (
      <main className="flex flex-grow items-center justify-center bg-orange-50 px-7 py-4 font-inter">
        <h2
          className=" mx-auto self-center font-inter text-3xl font-bold"
          aria-live="assertive"
        >
          Loading...
        </h2>
      </main>
    );
  }
  function renderVanElements(vans) {
    const hostVanElements =
      vans &&
      vans.map((van) => {
        return (
          <div
            key={van.id}
            className=" flex max-w-full items-center justify-between rounded bg-white p-4"
          >
            <div className="flex gap-2">
              <img
                src={van.imageUrl}
                alt={`Image of ${van.name}`}
                className=" max-w-16 rounded"
              />
              <div>
                <h3 className=" text-xl font-semibold">{van.name}</h3>
                <h4>${van.price} /day</h4>
              </div>
            </div>
            <Link
              to={`vans/${van.id}`}
              className="flex gap-4 justify-self-end font-medium hover:underline focus:underline"
            >
              View
            </Link>
          </div>
        );
      });

    return <div className="mt-4 flex flex-col gap-5">{hostVanElements}</div>;
  }

  return (
    <main className=" justify-center bg-orange-50 py-6 font-inter">
      <section className=" flex w-full items-center justify-between bg-orange-130 p-6 font-inter">
        <div className="flex flex-col gap-4 ">
          <h1 className="  text-4xl font-bold text-black-910">Welcome!</h1>
          <p className=" text-base font-medium text-gray-510">
            Income last{" "}
            <span className="font-bold underline underline-offset-auto">
              30 days
            </span>
          </p>
          <h2 className=" text-5xl font-extrabold text-black-910">$2,260</h2>
        </div>
        <Link
          className=" text-base font-medium text-black-910 hover:underline focus:underline"
          to={"income"}
        >
          Details
        </Link>
      </section>
      <section className=" bg-orange-630 flex w-full items-center justify-between p-6 font-inter">
        <div className="flex items-center justify-center">
          <h1 className=" mr-3 text-2xl font-bold text-black-910">
            Review score
          </h1>
          <BsStarFill className="star mr-1 text-2xl text-orange-430" />
          <p className=" text-xl font-medium text-gray-510">
            <span className="font-bold">5.0/</span> 5
          </p>
        </div>
        <Link
          className=" text-base font-medium text-black-910 hover:underline focus:underline"
          to={"reviews"}
        >
          Details
        </Link>
      </section>
      <section className="mt-2 py-6 font-inter">
        <div className=" flex justify-between">
          <h2 className=" text-2xl font-bold">Your listed vans</h2>
          <Link
            to={"vans"}
            className=" text-base font-medium hover:underline focus:underline"
          >
            View all
          </Link>
        </div>
        <div className="mt-1 flex flex-col gap-5">
          {renderVanElements(vans)}
        </div>
      </section>
    </main>
  );
}

export default Dashboard;
