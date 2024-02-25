import { useOutletContext } from "react-router-dom";

function HostVanPricing() {
  const [van] = useOutletContext();

  return (
    <div className="van-price mt-4 flex items-center text-black-910">
      <h4 className="text-2xl font-bold">${van.price}</h4>
      <p className="price-unit text-base font-light">/day</p>
    </div>
  );
}

export default HostVanPricing;
