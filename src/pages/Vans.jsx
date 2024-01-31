import { useEffect, useState } from "react";
import { Link } from "react-router-dom";

function Vans() {
  const [vans, setVans] = useState([]);

  const fetchData = async () => {
    try {
      const response = await fetch("/api/vans");
      const data = await response.json();
      setVans(data.vans);
    } catch (error) {
      console.error("Error in fetching data: ", error);
    }
  };

  useEffect(() => {
    fetchData();
  }, []);

  const vanTypeBgClass = {
    simple: "bg-orange-610",
    rugged: "bg-teal-800",
    luxury: "bg-black-910 ",
  };

  const vanElements = vans.map((van) => {
    return (
      <div key={van.id} className="card max-w-80 text-center">
        <Link
          to={`/vans/${van.id}`}
          aria-label={`View details for ${van.name} priced at $${van.price} per day`}
        >
          <img
            src={van.imageUrl}
            className="max-h-80 rounded"
            alt={`Image of ${van.name}`}
          />
          <div className="van-info my-2 flex flex-col justify-between gap-2 text-sm font-semibold text-black-910 sm:flex-row sm:gap-6 sm:text-base">
            <p className="text-left">{van.name}</p>
            <div className="van-price flex items-center sm:flex-col sm:text-right">
              <h4>${van.price}</h4>
              <p className="price-unit font-prompt text-xs font-normal sm:text-sm">
                /day
              </p>
            </div>
          </div>
          <p
            className={`van-type text-orange-130 ${vanTypeBgClass[van.type]} my-1 max-w-20 flex-shrink flex-grow-0 rounded px-4 py-2 text-center align-middle text-xs font-semibold capitalize sm:text-sm`}
          >
            {van.type}
          </p>
        </Link>
      </div>
    );
  });

  return (
    <main className="flex-grow bg-orange-50 px-7 py-14 font-inter ">
      <h1 className=" text-3xl font-bold text-black-910">
        Explore our van options
      </h1>
      <section className="container mx-auto my-14 grid grid-cols-2 gap-9 md:grid-cols-3 lg:grid-cols-4">
        {vanElements}
      </section>
    </main>
  );
}

export default Vans;
