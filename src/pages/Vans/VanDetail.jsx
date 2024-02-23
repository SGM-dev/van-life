import { useParams, Link, useLocation } from "react-router-dom";
import useFetch from "../../hooks/useFetch";

function VanDetail() {
  const params = useParams();
  const location = useLocation();

  // const [van, setVan] = useState(null);

  const { data, loading } = useFetch(`/api/vans/${params.id}`);
  const vanTypeBgClass = {
    simple: "bg-orange-610",
    rugged: "bg-teal-800",
    luxury: "bg-black-910 ",
  };

  const search = location.state?.search || "";

  return (
    <main className="grid flex-grow items-center gap-5 bg-orange-50 p-6 font-inter  sm:grid-cols-2">
      <Link
        className=" justify-start font-inter text-base font-semibold text-gray-510 hover:text-black-910 hover:underline focus:text-black-910 focus:underline sm:col-span-2"
        to={`..${search}`}
        relative="path"
        end={true}
      >
        &larr; Back to all vans
      </Link>
      {!loading ? (
        <>
          <img
            src={data.vans.imageUrl}
            alt={`Picture of ${data.vans.name} van`}
            className="rounded lg:max-w-lg"
          />
          <div className="mt-4 flex flex-col justify-between gap-3 sm:gap-4">
            <i
              className={`van-type text-orange-130 ${vanTypeBgClass[data.vans.type]} my-1 max-w-20 flex-shrink flex-grow-0 rounded px-4 py-2 text-center align-middle text-xs font-semibold capitalize not-italic sm:text-sm`}
            >
              {data.vans.type}
            </i>
            <h2 className="text-2xl font-bold text-black-910">
              {data.vans.name}
            </h2>
            <div className="van-price flex font-inter text-black-910">
              <h4 className="font-bold">${data.vans.price}</h4>
              <p className="price-unit font-prompt text-base font-light">
                /day
              </p>
            </div>
            <p className="text-base font-medium text-black-910">
              {data.vans.description}
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
