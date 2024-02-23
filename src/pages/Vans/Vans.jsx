import { Link, useSearchParams } from "react-router-dom";
import useFetch from "../../hooks/useFetch";

function Vans() {
  const { data, loading } = useFetch("/api/vans");

  const [searchParams, setSearchParams] = useSearchParams();
  const typeFilter = searchParams.get("type");

  const vanTypeBgClass = {
    simple: "bg-orange-610",
    rugged: "bg-teal-800",
    luxury: "bg-black-910 ",
  };

  const filteredVans =
    !loading &&
    (typeFilter
      ? data.vans.filter((van) => van.type === typeFilter)
      : data.vans);

  const vanElements =
    !loading &&
    filteredVans.map((van) => {
      return (
        <div key={van.id} className="card max-w-80 text-center">
          <Link
            to={van.id}
            state={{ search: searchParams.toString() }}
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

  function handleFilterChange(key, value) {
    setSearchParams((prevParams) => {
      if (value === null) {
        prevParams.delete(key);
      } else {
        prevParams.set(key, value);
      }
      return prevParams;
    });
  }

  return (
    <main className="flex-grow bg-orange-50 px-7 py-4 font-inter ">
      <h1 className=" text-3xl font-bold text-black-910">
        Explore our van options
      </h1>
      <div className="van-filters mt-4 flex items-center justify-between">
        <div className="flex gap-3">
          <button
            onClick={() => handleFilterChange("type", "simple")}
            className={`my-1 max-w-20 flex-shrink flex-grow-0 rounded bg-orange-130 px-4 py-2 text-center align-middle text-xs font-semibold capitalize text-gray-510 hover:bg-orange-610 hover:text-orange-130 focus:bg-orange-610 focus:text-orange-130 sm:text-sm ${typeFilter === "simple" && "bg-orange-610 text-orange-130"}`}
          >
            Simple
          </button>
          <button
            onClick={() => handleFilterChange("type", "luxury")}
            className={`my-1 max-w-20 flex-shrink flex-grow-0 rounded bg-orange-130 px-4 py-2 text-center align-middle text-xs font-semibold capitalize text-gray-510 hover:bg-black-910 hover:text-orange-130 focus:bg-black-910 focus:text-orange-130 sm:text-sm ${typeFilter === "luxury" && "bg-black-910 text-orange-130"}`}
          >
            Luxury
          </button>
          <button
            onClick={() => handleFilterChange("type", "rugged")}
            className={`my-1 max-w-20 flex-shrink flex-grow-0 rounded bg-orange-130 px-4 py-2 text-center align-middle text-xs font-semibold capitalize text-gray-510 hover:bg-teal-800 hover:text-orange-130 focus:bg-teal-800 focus:text-orange-130 sm:text-sm ${typeFilter === "rugged" && "bg-teal-800 text-orange-130"}`}
          >
            Rugged
          </button>
        </div>
        {typeFilter && (
          <button
            onClick={() => handleFilterChange("type", null)}
            className=" text-sm font-medium text-gray-510 underline-offset-2 hover:font-semibold hover:underline focus:underline"
          >
            Clear filters
          </button>
        )}
      </div>
      <section className=" mx-auto my-7 grid grid-cols-2 gap-9 md:grid-cols-3 lg:grid-cols-4">
        {vanElements}
      </section>
    </main>
  );
}

export default Vans;
