import { useParams, Link, useLocation } from "react-router-dom";
import { getVan } from "../../api";
import { useState, useEffect } from "react";

function VanDetail() {
  const params = useParams();
  const location = useLocation();
  const [van, setVan] = useState(null);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);

  useEffect(() => {
    async function loadVanDetail() {
      setLoading(true);
      try {
        const data = await getVan(params.id);
        setVan(data);
      } catch (err) {
        setError(err);
      } finally {
        setLoading(false);
      }
    }
    loadVanDetail();
  }, [params.id]);

  const vanTypeBgClass = {
    simple: "bg-orange-610",
    rugged: "bg-teal-800",
    luxury: "bg-black-910 ",
  };

  const search = location.state?.search || "";
  const type = location.state?.type || "all";

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

  return (
    van && (
      <main className="grid flex-grow items-center gap-5 bg-orange-50 p-6 font-inter  sm:grid-cols-2">
        <Link
          className=" justify-start font-inter text-base font-semibold text-gray-510 hover:text-black-910 hover:underline focus:text-black-910 focus:underline sm:col-span-2"
          to={`..${search}`}
          relative="path"
          end={true}
        >
          &larr; Back to {type} vans
        </Link>
        <img
          src={van.imageUrl}
          alt={`Picture of ${van.name} van`}
          className="rounded lg:max-w-lg"
        />
        <div className="mt-4 flex flex-col justify-between gap-3 sm:gap-4">
          <i
            className={`van-type text-orange-130 ${vanTypeBgClass[van.type]} my-1 max-w-20 flex-shrink flex-grow-0 rounded px-4 py-2 text-center align-middle text-xs font-semibold capitalize not-italic sm:text-sm`}
          >
            {van.type}
          </i>
          <h2 className="text-2xl font-bold text-black-910">{van.name}</h2>
          <div className="van-price flex font-inter text-black-910">
            <h4 className="font-bold">${van.price}</h4>
            <p className="price-unit font-prompt text-base font-light">/day</p>
          </div>
          <p className="text-base font-medium text-black-910">
            {van.description}
          </p>
          <button className="rounded bg-orange-430 px-24 py-3 text-center text-base font-bold text-white">
            Rent this van
          </button>
        </div>
      </main>
    )
  );
}

export default VanDetail;
