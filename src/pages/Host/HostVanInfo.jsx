import { useOutletContext } from "react-router-dom";

function HostVanInfo() {
  const [data, loading] = useOutletContext();

  return !loading ? (
    data.vans && (
      <article className="black-910 mt-4 flex flex-col gap-2 font-inter">
        <p className=" text-sm font-bold">
          Name: <span className=" font-medium">{data.vans.name}</span>
        </p>
        <p className=" text-sm font-bold">
          Category:{" "}
          <span className="font-medium capitalize">{data.vans.type}</span>
        </p>
        <p className=" text-sm font-bold">
          Description:{" "}
          <span className="font-medium">{data.vans.description}</span>
        </p>
        <p className=" text-sm font-bold">
          Visibility: <span className="font-medium">Public</span>
        </p>
      </article>
    )
  ) : (
    <h3 className=" mx-auto self-center font-inter text-xl font-bold">
      Loading...
    </h3>
  );
}

export default HostVanInfo;
