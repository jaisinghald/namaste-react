import { CDN_URL } from "../utils/constants";

const RestaurentCard = (props) => {
  const { resData } = props; //destructuring the props object is javaScript feature
  const { name, cuisines, costForTwo, avgRating, slaString } = resData;
  return (
    <div className="res-card">
      <img className="res-logo" src={CDN_URL + resData.cloudinaryImageId} />
      <h3>{name}</h3>
      <h5>{cuisines.join(", ")}</h5>
      <h5>{costForTwo}</h5>
      <h5>{avgRating} ⭐</h5>
      <h5>{slaString}</h5>
    </div>
  );
};
export default RestaurentCard;
