import RestaurentCard from "./RestaurentCard";
import { useState } from "react";

let list = [
  {
    type: "Restaurant",
    data: {
      id: "16865",
      name: "Pizza Hut",
      cloudinaryImageId:
        "RX_THUMBNAIL/IMAGES/VENDOR/2025/9/1/37e31a5f-6dc1-4ef2-8a9f-67d075111a4e_16865.JPG",
      costForTwo: "₹350 for two",
      cuisines: ["Pizzas"],
      avgRating: 4.3,
      avgRatingString: "4.3",
      slaString: "20-25 mins",
    },
  },
  {
    type: "Restaurant",
    data: {
      id: "16866",
      name: "Dominos",
      cloudinaryImageId:
        "RX_THUMBNAIL/IMAGES/VENDOR/2025/9/1/37e31a5f-6dc1-4ef2-8a9f-67d075111a4e_16865.JPG",
      costForTwo: "₹350 for two",
      cuisines: ["Pizzas"],
      avgRating: 3.3,
      avgRatingString: "3.3",
      slaString: "20-25 mins",
    },
  },
  {
    type: "KFC",
    data: {
      id: "16867",
      name: "KFC",
      cloudinaryImageId:
        "RX_THUMBNAIL/IMAGES/VENDOR/2025/9/1/37e31a5f-6dc1-4ef2-8a9f-67d075111a4e_16865.JPG",
      costForTwo: "₹350 for two",
      cuisines: ["burgers", "chicken"],
      avgRating: 4.6,
      avgRatingString: "4.6",
      slaString: "20-25 mins",
    },
  },
];
const Body = () => {
  //Local state variable-React powerfull vairbale
  const [listofRestaurents, setListofRestaurents] = useState(list);

  return (
    <div className="body">
      <div className="search">
        <button
          className="filter-btn"
          onClick={() => {
            //filter logic
            const filteredList = listofRestaurents.filter(
              (res) => res.data.avgRating > 4
            );
            setListofRestaurents(filteredList);
          }}
        >
          Top Rated Restaurents
        </button>
      </div>
      <div className="restaurent-container">
        {listofRestaurents.map((restaurant) => (
          <RestaurentCard key={restaurant.data.id} resData={restaurant.data} />
        ))}
      </div>
    </div>
  );
};
export default Body;
