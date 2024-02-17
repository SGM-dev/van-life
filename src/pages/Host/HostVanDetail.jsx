import { useParams, Outlet } from "react-router-dom";
import useFetch from "../../hooks/useFetch";
import { useEffect, useState } from "react";

function HostVanDetail() {
  const params = useParams();
  const [van, setVan] = useState(null);

  const { data = {}, loading } = useFetch(
    `/api/host/vans/${params.id}`,
    params,
  );

  useEffect(() => {
    if (!loading) {
      setVan(data.vans);
    }
  }, [loading, data]);

  const vanTypeBgClass = {
    simple: "bg-orange-610",
    rugged: "bg-teal-800",
    luxury: "bg-black-910 ",
  };

  return (
    <main className=" mt-4 h-5/6 rounded-md bg-white p-5 font-inter">
      {van ? (
        <div className="van-info flex items-center gap-4">
          <img
            src={van.imageUrl}
            alt={`Picture of ${van.name} van`}
            className=" max-h-32"
          />
          <div className="van-detail">
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
          </div>
        </div>
      ) : (
        <h2 className=" mx-auto self-center font-inter text-3xl font-bold">
          Loading...
        </h2>
      )}
    </main>
  );
}

export default HostVanDetail;
