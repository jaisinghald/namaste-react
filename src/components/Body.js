import RestaurentCard from "./RestaurentCard";
import { useEffect, useState } from "react";
import Shimmer from "./Shimmer";

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
  const [listofRestaurents, setListofRestaurents] = useState([]);
  const [filteredRestaurents, setFilteredRestaurents] = useState([]);

  const [searchText, setSearchText] = useState("");

  useEffect(() => {
    getData();
  }, []);

  const getData = async () => {
    try {
      const data = await fetch(
        "https://www.swiggy.com/dapi/restaurants/list/v5?lat=17.4695033&lng=78.5968268&is-seo-homepage-enabled=true&page_type=DESKTOP_WEB_LISTING"
      );
      const json = await data.json();

      const findRestaurants = (obj) => {
        if (!obj || typeof obj !== "object") return null;
        if (Array.isArray(obj)) {
          for (const item of obj) {
            const r = findRestaurants(item);
            if (r) return r;
          }
        } else {
          if (Array.isArray(obj.restaurants)) return obj.restaurants;
          for (const key of Object.keys(obj)) {
            const r = findRestaurants(obj[key]);
            if (r) return r;
          }
        }
        return null;
      };

      const restaurants =
        findRestaurants(json) ||
        json?.data?.cards?.[1]?.card?.card?.gridElements?.restaurants ||
        [];
      setListofRestaurents(restaurants);
      setFilteredRestaurents(restaurants); //set the data to state variable first time
      console.log(json);
    } catch (err) {
      console.error("Failed to load restaurants:", err);
    }
  };

  //when state variable changes react triger the reconsilisation cycle and re-renders the component
  console.log("Body Rendered");
  ///Conditional Rendering
  // if (listofRestaurents.length === 0) {
  //   return <Shimmer />;
  // }
  return listofRestaurents.length === 0 ? (
    <Shimmer />
  ) : (
    <div className="body">
      <div className="filter">
        <input
          type="text"
          onChange={(e) => {
            setSearchText(e.target.value);
          }}
          className="search-box"
          value={searchText}
        />
        <button
          className="search-btn"
          onClick={() => {
            //filter the restaurant cards and update the UI.
            //Searchtext
            const filteredRestaurents = listofRestaurents.filter((res) =>
              res.info.name.toLowerCase().includes(searchText.toLowerCase())
            );
            setFilteredRestaurents(filteredRestaurents);
          }}
        >
          Search
        </button>

        <div className="search">
          <button
            className="filter-btn"
            onClick={() => {
              //filter logic
              const filteredList = listofRestaurents.filter(
                (res) => res.info.avgRating > 4.2
              );
              setListofRestaurents(filteredList);
            }}
          >
            Top Rated Restaurents
          </button>
        </div>
      </div>
      <div className="restaurent-container">
        {filteredRestaurents.map((restaurant, idx) => {
          const res = restaurant?.data ?? restaurant;
          if (!res) return null;
          return <RestaurentCard key={res.id ?? idx} resData={res} />;
        })}
      </div>
    </div>
  );
};
export default Body;
