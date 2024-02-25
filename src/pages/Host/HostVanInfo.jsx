import { useOutletContext } from "react-router-dom";

function HostVanInfo() {
  const [van] = useOutletContext();

  return (
    <article className="black-910 mt-4 flex flex-col gap-2 font-inter">
      <p className=" text-sm font-bold">
        Name: <span className=" font-medium">{van.name}</span>
      </p>
      <p className=" text-sm font-bold">
        Category: <span className="font-medium capitalize">{van.type}</span>
      </p>
      <p className=" text-sm font-bold">
        Description: <span className="font-medium">{van.description}</span>
      </p>
      <p className=" text-sm font-bold">
        Visibility: <span className="font-medium">Public</span>
      </p>
    </article>
  );
}

export default HostVanInfo;
