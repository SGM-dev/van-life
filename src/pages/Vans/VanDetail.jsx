import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";

function VanDetail() {
  const params = useParams();

  const [van, setVan] = useState(null);

  const vanTypeBgClass = {
    simple: "bg-orange-610",
    rugged: "bg-teal-800",
    luxury: "bg-black-910 ",
  };

  const fetchVanDetail = async (id) => {
    try {
      const response = await fetch(`/api/vans/${id}`);
      const data = await response.json();
      setVan(data.vans);
    } catch (error) {
      console.error("Error in fetching the van data:", error);
    }
  };

  useEffect(() => {
    fetchVanDetail(params.id);
  }, [params.id]);

  return (
    <main className="grid flex-grow items-center gap-5 bg-orange-50 p-6 font-inter sm:grid-cols-2 sm:justify-items-center">
      {van ? (
        <>
          <img
            src={van.imageUrl}
            alt={`Picture of ${van.name} van`}
            className="rounded lg:max-w-lg"
          />
          <div className="mt-4 flex flex-col justify-between gap-2 sm:gap-4">
            <p
              className={`van-type text-orange-130 ${vanTypeBgClass[van.type]} my-1 max-w-20 flex-shrink flex-grow-0 rounded px-4 py-2 text-center align-middle text-xs font-semibold capitalize sm:text-sm`}
            >
              {van.type}
            </p>
            <h2 className="text-2xl font-bold text-black-910">{van.name}</h2>
            <div className="van-price flex font-inter text-black-910">
              <h4 className="font-bold">${van.price}</h4>
              <p className="price-unit font-prompt text-base font-light">
                /day
              </p>
            </div>
            <p className="text-base font-medium text-black-910">
              {van.description}
            </p>
            <button className="rounded bg-orange-430 px-24 py-3 text-center text-base font-bold text-white">
              Rent this van
            </button>
          </div>
        </>
      ) : (
        <h2 className="col-span-2 mx-auto font-inter text-3xl font-bold">
          Loading...
        </h2>
      )}
    </main>
  );
}

export default VanDetail;
