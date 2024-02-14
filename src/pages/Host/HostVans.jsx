import { Link } from "react-router-dom";
import useFetch from "../../hooks/useFetch";

function HostVans() {
  const { data, loading } = useFetch("/api/host/vans");

  const hostVanElements =
    !loading &&
    data.vans.map((van) => {
      return (
        <div
          key={van.id}
          className=" flex max-w-full flex-col rounded bg-white p-4"
        >
          <Link to={`/host/vans/${van.id}`} className="flex gap-4">
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
      <div className="mt-4 flex flex-col gap-5">
        {!loading ? (
          hostVanElements
        ) : (
          <h2 className="mx-auto font-inter text-3xl font-bold">Loading...</h2>
        )}
      </div>
    </main>
  );
}

export default HostVans;
