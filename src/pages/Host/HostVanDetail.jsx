import { useParams, Outlet } from "react-router-dom";
import useFetch from "../../hooks/useFetch";

function HostVanDetail() {
  const params = useParams();

  const { data, loading } = useFetch(`/api/host/vans/${params.id}`, params);

  const vanTypeBgClass = {
    simple: "bg-orange-610",
    rugged: "bg-teal-800",
    luxury: "bg-black-910 ",
  };

  return (
    <main className=" mt-4 h-5/6 rounded bg-white p-5 font-inter">
      {!loading ? (
        data.vans && (
          <div className="van-info flex items-center gap-4">
            <img
              src={data.vans.imageUrl}
              alt={`Picture of ${data.vans.name} van`}
              className=" max-h-32 rounded"
            />
            <div className="van-detail">
              <p
                className={`van-type text-orange-130 ${vanTypeBgClass[data.vans.type]} my-1 max-w-20 flex-shrink flex-grow-0 rounded px-4 py-2 text-center align-middle text-xs font-semibold capitalize sm:text-sm`}
              >
                {data.vans.type}
              </p>
              <h2 className="text-2xl font-bold text-black-910">
                {data.vans.name}
              </h2>
              <div className="van-price flex font-inter text-black-910">
                <h4 className="font-bold">${data.vans.price}</h4>
                <p className="price-unit font-prompt text-base font-light">
                  /day
                </p>
              </div>
            </div>
          </div>
        )
      ) : (
        <h2 className=" mx-auto self-center font-inter text-3xl font-bold">
          Loading...
        </h2>
      )}
    </main>
  );
}

export default HostVanDetail;
