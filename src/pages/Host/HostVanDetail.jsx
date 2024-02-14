import { useEffect, useState } from "react";
import { useParams, Outlet } from "react-router-dom";

function HostVanDetail() {
  const params = useParams();

  const [van, setVan] = useState(null);

  return (
    <main className=" mt-4 h-5/6 justify-center rounded-md bg-white py-6 font-inter">
      <div className="van-info">
        {/* <img src={van.imageUrl} alt={`Picture of ${van.name} van`} /> */}
      </div>
    </main>
  );
}

export default HostVanDetail;
