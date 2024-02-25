import { Link } from "react-router-dom";
import { useState, useEffect } from "react";
import { getHostVans } from "../../api";

function HostVans() {
  const [vans, setVans] = useState(null);
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
      <main className="flex-grow bg-orange-50 px-7 py-4 font-inter ">
        <h2 className=" mx-auto self-center font-inter text-3xl font-bold">
          Loading...
        </h2>
      </main>
    );
  }

  if (error) {
    return (
      <main className="flex-grow bg-orange-50 px-7 py-4 font-inter ">
        <h2 className=" mx-auto self-center font-inter text-3xl font-bold">
          There was an Error: {error.message}
        </h2>
      </main>
    );
  }

  const hostVanElements =
    vans &&
    vans.map((van) => {
      return (
        <div
          key={van.id}
          className=" flex max-w-full flex-col rounded bg-white p-4"
        >
          <Link to={van.id} className="flex gap-4">
            <img
              src={van.imageUrl}
              alt={`Image of ${van.name}`}
              className=" max-w-16 rounded"
            />
            <div>
              <h3 className=" text-xl font-semibold">{van.name}</h3>
              <h4>${van.price} /day</h4>
            </div>
          </Link>
        </div>
      );
    });

  return (
    <main className=" justify-center bg-orange-50 py-6 font-inter">
      <h2 className=" text-2xl font-bold">Your listed vans</h2>
      <div className="mt-4 flex flex-col gap-5">{hostVanElements}</div>
    </main>
  );
}

export default HostVans;
