import { use, useEffect, useState } from "react";
import Shimmer from "./Shimmer";
import { useParams } from "react-router-dom";
import { useRestaurantMenu } from "../utils/useRestaurantMenu";

const RestaurantMenu = () => {
  const [restInfo, setRestInfo] = useState(useRestaurantMenu());
  const { resId } = useParams();

  useEffect(() => {
    fetchMenu();
  }, []);

  console.log(useParams());

  const fetchMenu = async () => {
    // const response = await fetch(
    //   "https://www.swiggy.com/dapi/menu/pl?page-type=REGULAR_MENU&complete-menu=true&lat=28.7040592&lng=77.10249019999999&restaurantId=10208",
    // );
    // console.log("Status:", response.status);
    // const res = await response.json();
    // const text = await response.text();
    // //setRestInfo(response);
    // console.log(text);
  };

  const { name, cuisines } = restInfo?.data?.cards[2]?.card?.card?.info;
  const { itemCards } =
    restInfo?.data?.cards[4]?.groupedCard?.cardGroupMap?.REGULAR?.cards[2]?.card
      ?.card;

  // console.log(itemCards);

  return restInfo === null ? (
    <Shimmer />
  ) : (
    <div className="menu">
      <h1>{name}</h1>
      <p>{cuisines.join(", ")}</p>
      <h2>Menu</h2>
      <ul>
        {itemCards.map((item) => {
          return (
            <li key={item?.card?.info?.id}>
              {item?.card?.info?.name}-{"Rs."}
              {item?.card?.info?.price / 100 ||
                item?.card?.info?.defaultPrice / 100}
            </li>
          );
        })}
      </ul>
    </div>
  );
};

export default RestaurantMenu;
