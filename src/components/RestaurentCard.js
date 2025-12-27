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
    <div className="res-card">
      <img
        className="res-logo"
        src={CDN_URL + (resData.info.cloudinaryImageId || "")}
        alt={resData.info.name || "restaurant"}
      />
      <h3>{resData.info.name}</h3>
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
