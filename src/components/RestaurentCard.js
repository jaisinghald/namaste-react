import { CDN_URL } from "../utils/constants";

const RestaurentCard = (props) => {
  const { resData } = props;
  // const {
  //   name,
  //   cuisines,
  //   costForTwo,
  //   avgRating,
  //   slaString,
  //   cloudinaryImageId,
  // } = resData || {};
  return (
    <div className="m-4 p-4 w-[250px] rounded-lg bg-gray-100 hover:bg-gray-200 cursor-pointer">
      <img
        className="rounded-lg"
        src={CDN_URL + (resData.info.cloudinaryImageId || "")}
        alt={resData.info.name || "restaurant"}
      />
      <h3 className="font-bold py-4 text-lg">{resData.info.name}</h3>
      <h5>
        {resData.info.cuisines && resData.info.cuisines.join
          ? resData.info.cuisines.join(", ")
          : ""}
      </h5>
      <h5>{resData.info.costForTwo}</h5>
      <h5>{resData.info.avgRating} ⭐</h5>
      <h5>{resData.info.slaString}</h5>
    </div>
  );
};
export default RestaurentCard;
