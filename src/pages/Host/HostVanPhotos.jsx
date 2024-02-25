import { useOutletContext } from "react-router-dom";

function HostVanPhotos() {
  const [van] = useOutletContext();
  return (
    <div className="mt-4 flex items-center gap-1">
      <img
        src={van.imageUrl}
        alt={`image of ${van.name}`}
        className=" max-h-24"
      />
    </div>
  );
}

export default HostVanPhotos;
