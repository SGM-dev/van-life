import { useEffect, useState } from "react";

function Vans() {
  const [vans, setVans] = useState([]);

  useEffect(() => {
    fetch("/api/vans")
      .then((res) => res.json())
      .then((data) => setVans(data.vans));
  }, []);

  const vanElements = vans.map((van) => {
    const vanTypeBgClass = {
      simple: "bg-orange-610",
      rugged: "bg-teal-800",
      luxury: "bg-black-910 ",
    };

    return (
      <div key={van.id} className="card max-w-80 text-center">
        <img src={van.imageUrl} className="max-h-80 rounded" />
        <div className="van-info my-2 flex justify-between gap-6 text-xl font-semibold text-black-910">
          <div className=" text-left">
            <h3>{van.name}</h3>
            <p
              className={`van-type text-orange-130 ${vanTypeBgClass[van.type]} my-1 max-w-20 flex-shrink flex-grow-0 rounded px-4 py-2 text-center text-sm font-semibold capitalize`}
            >
              {van.type}
            </p>
          </div>

          <div className="van-price flex flex-col text-right">
            <h4>${van.price}</h4>
            <p className="price-unit font-prompt text-sm font-medium">/day</p>
          </div>
        </div>
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
