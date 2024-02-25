import { useState, useEffect } from "react";
import { useParams, Outlet, Link, NavLink } from "react-router-dom";
import { getHostVanDetail } from "../../api";

function HostVanDetail() {
  const params = useParams();
  const [van, setVan] = useState(null);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);

  useEffect(() => {
    async function loadHostVanDetail() {
      setLoading(true);
      try {
        const data = await getHostVanDetail(params.id);
        setVan(data);
      } catch (err) {
        setError(err);
      } finally {
        setLoading(false);
      }
    }
    loadHostVanDetail();
  }, [params.id]);

  const vanTypeBgClass = {
    simple: "bg-orange-610",
    rugged: "bg-teal-800",
    luxury: "bg-black-910 ",
  };

  const activeClass = `text-black-910 underline underline-offset-2 font-bold`;
  const defaultClass = `hover:text-black-910 hover:underline hover:font-bold focus:text-black-910 focus:underline underline-offset-2`;

  if (loading) {
    return (
      <main className="flex-grow bg-orange-50 px-7 py-4 font-inter ">
        <h2 className=" mx-auto self-center font-inter text-3xl font-bold">
          Loading...
        </h2>
      </main>
    );
  }

  if (error) {
    return (
      <main className="flex-grow bg-orange-50 px-7 py-4 font-inter ">
        <h2 className=" mx-auto self-center font-inter text-3xl font-bold">
          There was an Error: {error.message}
        </h2>
      </main>
    );
  }

  return (
    van && (
      <section className=" h-full py-4">
        <Link
          className=" gap-5 font-inter text-base font-semibold text-gray-510 hover:text-black-910 hover:underline focus:text-black-910 focus:underline"
          to=".."
          relative="path"
          end={true}
        >
          &larr; Back to all vans
        </Link>
        <main className=" mt-4 flex flex-col gap-2 rounded bg-white p-5 font-inter">
          <div className="van-info flex items-center gap-4">
            <img
              src={van.imageUrl}
              alt={`Picture of ${van.name} van`}
              className=" max-h-32 rounded"
            />
            <div className="van-detail">
              <p
                className={`van-type text-orange-130 ${vanTypeBgClass[van.type]} my-1 max-w-20 flex-shrink flex-grow-0 rounded px-4 py-2 text-center align-middle text-xs font-semibold capitalize sm:text-sm`}
              >
                {van.type}
              </p>
              <h2 className="text-2xl font-bold text-black-910">{van.name}</h2>
              <div className="van-price flex text-black-910">
                <h4 className="font-bold">${van.price}</h4>
                <p className="price-unit text-base font-light">/day</p>
              </div>
            </div>
          </div>
          <nav className="nav-links flex gap-5 font-inter text-base font-medium text-gray-510">
            <NavLink
              className={({ isActive }) =>
                isActive ? activeClass : defaultClass
              }
              to="."
              end={true}
            >
              Details
            </NavLink>
            <NavLink
              className={({ isActive }) =>
                isActive ? activeClass : defaultClass
              }
              to="pricing"
            >
              Pricing
            </NavLink>
            <NavLink
              className={({ isActive }) =>
                isActive ? activeClass : defaultClass
              }
              to="photos"
            >
              Photos
            </NavLink>
          </nav>
          <Outlet context={[van, loading]} />
        </main>
      </section>
    )
  );
}

export default HostVanDetail;
