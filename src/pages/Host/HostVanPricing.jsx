import { useOutletContext } from "react-router-dom";

function HostVanPricing() {
  const [data, loading] = useOutletContext();

  return !loading ? (
    <div className="van-price mt-4 flex items-center text-black-910">
      <h4 className="text-2xl font-bold">${data.vans.price}</h4>
      <p className="price-unit text-base font-light">/day</p>
    </div>
  ) : (
    <h3 className=" mx-auto self-center font-inter text-xl font-bold">
      Loading...
    </h3>
  );
}

export default HostVanPricing;
