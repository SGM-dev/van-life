import { useEffect, useState } from "react";
import { Link } from "react-router-dom";

function HostVans() {
  const [hostVans, setHostVans] = useState([]);

  const fetchData = async () => {
    try {
      const response = await fetch("/api/host/vans");
      const data = await response.json();
      setHostVans(data.vans);
    } catch (error) {
      console.error("Error in fetching data", error);
    }
  };

  useEffect(() => {
    fetchData();
  }, []);

  const hostVanElements = hostVans.map((van) => {
    return (
      <div
        key={van.id}
        className=" flex max-w-full flex-col rounded bg-white p-4"
      >
        <Link to={`/api/host/vans/${van.id}`} className="flex gap-4">
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
    <main className="flex-grow bg-orange-50 py-6 font-inter ">
      <h2 className=" text-2xl font-bold">Your listed vans</h2>
      <div className="mt-4 flex flex-col gap-5">{hostVanElements}</div>
    </main>
  );
}

export default HostVans;
