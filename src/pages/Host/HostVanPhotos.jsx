import { useOutletContext } from "react-router-dom";

function HostVanPhotos() {
  const [data, loading] = useOutletContext();
  return !loading ? (
    data.vans && (
      <div className="mt-4 flex items-center gap-1">
        <img
          src={data.vans.imageUrl}
          alt={`image of ${data.vans.name}`}
          className=" max-h-24"
        />
      </div>
    )
  ) : (
    <h3 className=" mx-auto self-center font-inter text-xl font-bold">
      Loading...
    </h3>
  );
}

export default HostVanPhotos;
