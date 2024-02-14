import { useParams, Outlet } from "react-router-dom";
import useFetch from "../../hooks/useFetch";

function HostVanDetail() {
  const params = useParams();

  const { data, loading } = useFetch(`/api/host/vans/${params.id}`);

  const vanTypeBgClass = {
    simple: "bg-orange-610",
    rugged: "bg-teal-800",
    luxury: "bg-black-910 ",
  };

  return (
    <main className=" mt-4 h-5/6 justify-center rounded-md bg-white py-6 font-inter">
      <div className="van-info">
        {/* <img src={van.imageUrl} alt={`Picture of ${van.name} van`} /> */}
      </div>
    </main>
  );
}

export default HostVanDetail;
