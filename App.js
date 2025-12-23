import React from "react";
import foodLogo from "./food_logo.jpg";
import ReactDOM from "react-dom/client"; // for React 18+

/**
 * Header
 *  logo
 *  Nav Bar
 * Body
 *  search
 *  RestaurentContainer
 *    -RestaurentCard
 *      -img
 *      -name
 *     -cuisines
 *     -rating
 *     - delivery time
 *
 * footer
 *   copyright
 *   address
 *   links
 *   contact
 */

const Header = () => {
  return (
    <div className="header">
      <div className="logo-container">
        <img src="data:image/jpeg;base64,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" />
      </div>
      <div className="nav-items">
        <ul>
          <li>Home</li>
          <li>About Us</li>
          <li>Contact Us</li>
          <li>Cart</li>
        </ul>
      </div>
    </div>
  );
};

const resObj = {
  "@type": "type.googleapis.com/swiggy.gandalf.widgets.v2.GridWidget",
  layout: {
    columns: 4,
  },
  id: "restaurant_grid_listing_v2",
  gridElements: {
    infoWithStyle: {
      "@type":
        "type.googleapis.com/swiggy.seo.widgets.v1.FoodRestaurantGridListingInfo",
      restaurants: [
        {
          "@type": "type.googleapis.com/swiggy.presentation.food.v2.Restaurant",
          info: {
            id: "16865",
            name: "Pizza Hut",
            cloudinaryImageId:
              "RX_THUMBNAIL/IMAGES/VENDOR/2025/9/1/37e31a5f-6dc1-4ef2-8a9f-67d075111a4e_16865.JPG",
            locality: "Janpath",
            areaName: "Janpath",
            costForTwo: "₹350 for two",
            cuisines: ["Pizzas"],
            avgRating: 4.3,
            parentId: "721",
            avgRatingString: "4.3",
            totalRatingsString: "5.5K+",
            sla: {
              deliveryTime: 20,
              lastMileTravel: 0.8,
              serviceability: "SERVICEABLE",
              slaString: "20-25 mins",
              lastMileTravelString: "0.8 km",
              iconType: "ICON_TYPE_EMPTY",
            },
            availability: {
              nextCloseTime: "2025-12-22 23:00:00",
              opened: true,
            },
            badges: {
              imageBadges: [
                {
                  imageId: "android/static-assets/icons/big_rx.png",
                  description: "bolt!",
                },
              ],
            },
            isOpen: true,
            type: "F",
            badgesV2: {
              entityBadges: {
                imageBased: {
                  badgeObject: [
                    {
                      attributes: {
                        description: "bolt!",
                        imageId: "android/static-assets/icons/big_rx.png",
                      },
                    },
                  ],
                },
                textBased: {},
                textExtendedBadges: {},
              },
            },
            aggregatedDiscountInfoV3: {
              header: "60% OFF",
              discountTag: "FLAT DEAL",
            },
            orderabilityCommunication: {
              title: {},
              subTitle: {},
              message: {},
              customIcon: {},
            },
            differentiatedUi: {
              displayType: "ADS_UI_DISPLAY_TYPE_ENUM_DEFAULT",
              differentiatedUiMediaDetails: {
                mediaType: "ADS_MEDIA_ENUM_IMAGE",
                lottie: {},
                video: {},
              },
            },
            reviewsSummary: {},
            displayType: "RESTAURANT_DISPLAY_TYPE_DEFAULT",
            restaurantOfferPresentationInfo: {},
            externalRatings: {
              aggregatedRating: {
                rating: "4.2",
                ratingCount: "7.0K+",
              },
              source: "GOOGLE",
              sourceIconImageId: "v1704440323/google_ratings/rating_google_tag",
            },
            ratingsDisplayPreference: "RATINGS_DISPLAY_PREFERENCE_SHOW_SWIGGY",
          },
          analytics: {
            context: "seo-data-ce620c01-0e6b-4809-aab8-aa0cb8556695",
          },
          cta: {
            link: "https://www.swiggy.com/city/delhi/pizza-hut-janpath-rest16865",
            text: "RESTAURANT_MENU",
            type: "WEBLINK",
          },
          widgetId:
            "collectionV5RestaurantListWidget_SimRestoRelevance_food_seo",
        },
        {
          "@type": "type.googleapis.com/swiggy.presentation.food.v2.Restaurant",
          info: {
            id: "8614",
            name: "Burger King",
            cloudinaryImageId:
              "RX_THUMBNAIL/IMAGES/VENDOR/2025/6/18/ee1fdf16-ea5f-4a44-9e58-7b3a9dee2618_8614.jpg",
            locality: "Connaught Place",
            areaName: "Connaught Place",
            costForTwo: "₹350 for two",
            cuisines: ["Burgers", "American"],
            avgRating: 4.4,
            parentId: "166",
            avgRatingString: "4.4",
            totalRatingsString: "44K+",
            sla: {
              deliveryTime: 17,
              serviceability: "SERVICEABLE",
              slaString: "15-20 mins",
              iconType: "ICON_TYPE_EMPTY",
            },
            availability: {
              nextCloseTime: "2025-12-23 03:00:00",
              opened: true,
            },
            badges: {
              imageBadges: [
                {
                  imageId: "android/static-assets/icons/big_rx.png",
                  description: "bolt!",
                },
              ],
            },
            isOpen: true,
            type: "F",
            badgesV2: {
              entityBadges: {
                imageBased: {
                  badgeObject: [
                    {
                      attributes: {
                        description: "bolt!",
                        imageId: "android/static-assets/icons/big_rx.png",
                      },
                    },
                  ],
                },
                textBased: {},
                textExtendedBadges: {},
              },
            },
            aggregatedDiscountInfoV3: {
              header: "ITEMS",
              subHeader: "AT ₹59",
            },
            orderabilityCommunication: {
              title: {},
              subTitle: {},
              message: {},
              customIcon: {},
            },
            differentiatedUi: {
              displayType: "ADS_UI_DISPLAY_TYPE_ENUM_DEFAULT",
              differentiatedUiMediaDetails: {
                mediaType: "ADS_MEDIA_ENUM_IMAGE",
                lottie: {},
                video: {},
              },
            },
            reviewsSummary: {},
            displayType: "RESTAURANT_DISPLAY_TYPE_DEFAULT",
            restaurantOfferPresentationInfo: {},
            externalRatings: {
              aggregatedRating: {
                rating: "4.2",
                ratingCount: "9.3K+",
              },
              source: "GOOGLE",
              sourceIconImageId: "v1704440323/google_ratings/rating_google_tag",
            },
            ratingsDisplayPreference: "RATINGS_DISPLAY_PREFERENCE_SHOW_SWIGGY",
          },
          analytics: {
            context: "seo-data-ce620c01-0e6b-4809-aab8-aa0cb8556695",
          },
          cta: {
            link: "https://www.swiggy.com/city/delhi/burger-king-connaught-place-rest8614",
            text: "RESTAURANT_MENU",
            type: "WEBLINK",
          },
          widgetId:
            "collectionV5RestaurantListWidget_SimRestoRelevance_food_seo",
        },
        {
          "@type": "type.googleapis.com/swiggy.presentation.food.v2.Restaurant",
          info: {
            id: "24207",
            name: "Domino's Pizza",
            cloudinaryImageId:
              "RX_THUMBNAIL/IMAGES/VENDOR/2025/11/11/9b8d22bc-2112-47e7-94e3-4e0fd65329a8_24207.JPG",
            locality: "Connaught Circus",
            areaName: "Connaught Place",
            costForTwo: "₹400 for two",
            cuisines: ["Pizzas", "Italian", "Pastas", "Desserts"],
            avgRating: 4.4,
            parentId: "2456",
            avgRatingString: "4.4",
            totalRatingsString: "17K+",
            sla: {
              deliveryTime: 25,
              lastMileTravel: 0.8,
              serviceability: "SERVICEABLE",
              slaString: "20-25 mins",
              lastMileTravelString: "0.8 km",
              iconType: "ICON_TYPE_EMPTY",
            },
            availability: {
              nextCloseTime: "2025-12-22 23:59:00",
              opened: true,
            },
            badges: {
              imageBadges: [
                {
                  imageId: "android/static-assets/icons/big_rx.png",
                  description: "bolt!",
                },
              ],
            },
            isOpen: true,
            type: "F",
            badgesV2: {
              entityBadges: {
                imageBased: {
                  badgeObject: [
                    {
                      attributes: {
                        description: "bolt!",
                        imageId: "android/static-assets/icons/big_rx.png",
                      },
                    },
                  ],
                },
                textBased: {},
                textExtendedBadges: {},
              },
            },
            aggregatedDiscountInfoV3: {
              header: "50% OFF",
            },
            orderabilityCommunication: {
              title: {},
              subTitle: {},
              message: {},
              customIcon: {},
            },
            differentiatedUi: {
              displayType: "ADS_UI_DISPLAY_TYPE_ENUM_DEFAULT",
              differentiatedUiMediaDetails: {
                mediaType: "ADS_MEDIA_ENUM_IMAGE",
                lottie: {},
                video: {},
              },
            },
            reviewsSummary: {},
            displayType: "RESTAURANT_DISPLAY_TYPE_DEFAULT",
            restaurantOfferPresentationInfo: {},
            externalRatings: {
              aggregatedRating: {
                rating: "4.0",
                ratingCount: "11K+",
              },
              source: "GOOGLE",
              sourceIconImageId: "v1704440323/google_ratings/rating_google_tag",
            },
            ratingsDisplayPreference: "RATINGS_DISPLAY_PREFERENCE_SHOW_SWIGGY",
          },
          analytics: {
            context: "seo-data-ce620c01-0e6b-4809-aab8-aa0cb8556695",
          },
          cta: {
            link: "https://www.swiggy.com/city/delhi/dominos-pizza-connaught-circus-connaught-place-rest24207",
            text: "RESTAURANT_MENU",
            type: "WEBLINK",
          },
          widgetId:
            "collectionV5RestaurantListWidget_SimRestoRelevance_food_seo",
        },
        {
          "@type": "type.googleapis.com/swiggy.presentation.food.v2.Restaurant",
          info: {
            id: "691733",
            name: "Chinese Wok",
            cloudinaryImageId: "e0839ff574213e6f35b3899ebf1fc597",
            locality: "Kashmiri Gate",
            areaName: "Kashmiri Gate",
            costForTwo: "₹250 for two",
            cuisines: ["Chinese", "Asian", "Tibetan", "Desserts"],
            avgRating: 4.2,
            parentId: "61955",
            avgRatingString: "4.2",
            totalRatingsString: "817",
            sla: {
              deliveryTime: 47,
              lastMileTravel: 5.9,
              serviceability: "SERVICEABLE",
              slaString: "45-50 mins",
              lastMileTravelString: "5.9 km",
              iconType: "ICON_TYPE_EMPTY",
            },
            availability: {
              nextCloseTime: "2025-12-23 01:00:00",
              opened: true,
            },
            badges: {},
            isOpen: true,
            type: "F",
            badgesV2: {
              entityBadges: {
                imageBased: {},
                textBased: {},
                textExtendedBadges: {},
              },
            },
            aggregatedDiscountInfoV3: {
              header: "50% OFF",
            },
            orderabilityCommunication: {
              title: {},
              subTitle: {},
              message: {},
              customIcon: {},
            },
            differentiatedUi: {
              displayType: "ADS_UI_DISPLAY_TYPE_ENUM_DEFAULT",
              differentiatedUiMediaDetails: {
                mediaType: "ADS_MEDIA_ENUM_IMAGE",
                lottie: {},
                video: {},
              },
            },
            reviewsSummary: {},
            displayType: "RESTAURANT_DISPLAY_TYPE_DEFAULT",
            restaurantOfferPresentationInfo: {},
            externalRatings: {
              aggregatedRating: {
                rating: "2.9",
                ratingCount: "66",
              },
              source: "GOOGLE",
              sourceIconImageId: "v1704440323/google_ratings/rating_google_tag",
            },
            ratingsDisplayPreference: "RATINGS_DISPLAY_PREFERENCE_SHOW_SWIGGY",
          },
          analytics: {
            context: "seo-data-ce620c01-0e6b-4809-aab8-aa0cb8556695",
          },
          cta: {
            link: "https://www.swiggy.com/city/delhi/chinese-wok-kashmiri-gate-rest691733",
            text: "RESTAURANT_MENU",
            type: "WEBLINK",
          },
          widgetId:
            "collectionV5RestaurantListWidget_SimRestoRelevance_food_seo",
        },
        {
          "@type": "type.googleapis.com/swiggy.presentation.food.v2.Restaurant",
          info: {
            id: "857156",
            name: "ZAZA Mughal Biryani",
            cloudinaryImageId:
              "RX_THUMBNAIL/IMAGES/VENDOR/2024/9/17/ba7c34f8-2dbf-404f-b741-35843bf209b0_857156.jpg",
            locality: "E-2/27",
            areaName: "KAROL BAGH",
            costForTwo: "₹250 for two",
            cuisines: ["Biryani", "Awadhi"],
            avgRating: 4.6,
            parentId: "22473",
            avgRatingString: "4.6",
            totalRatingsString: "512",
            sla: {
              deliveryTime: 25,
              lastMileTravel: 3,
              serviceability: "SERVICEABLE",
              slaString: "20-30 mins",
              lastMileTravelString: "3.0 km",
              iconType: "ICON_TYPE_EMPTY",
            },
            availability: {
              nextCloseTime: "2025-12-23 02:00:00",
              opened: true,
            },
            badges: {
              imageBadges: [
                {
                  imageId: "Rxawards/_CATEGORY-Biryani.png",
                  description: "Delivery!",
                },
              ],
            },
            isOpen: true,
            type: "F",
            badgesV2: {
              entityBadges: {
                imageBased: {
                  badgeObject: [
                    {
                      attributes: {
                        description: "Delivery!",
                        imageId: "Rxawards/_CATEGORY-Biryani.png",
                      },
                    },
                  ],
                },
                textBased: {},
                textExtendedBadges: {},
              },
            },
            aggregatedDiscountInfoV3: {
              header: "50% OFF",
            },
            orderabilityCommunication: {
              title: {},
              subTitle: {},
              message: {},
              customIcon: {},
            },
            differentiatedUi: {
              displayType: "ADS_UI_DISPLAY_TYPE_ENUM_DEFAULT",
              differentiatedUiMediaDetails: {
                mediaType: "ADS_MEDIA_ENUM_IMAGE",
                lottie: {},
                video: {},
              },
            },
            reviewsSummary: {},
            displayType: "RESTAURANT_DISPLAY_TYPE_DEFAULT",
            restaurantOfferPresentationInfo: {},
            externalRatings: {
              aggregatedRating: {
                rating: "--",
              },
            },
            ratingsDisplayPreference: "RATINGS_DISPLAY_PREFERENCE_SHOW_SWIGGY",
          },
          analytics: {
            context: "seo-data-ce620c01-0e6b-4809-aab8-aa0cb8556695",
          },
          cta: {
            link: "https://www.swiggy.com/city/delhi/zaza-mughal-biryani-e-2-27-karol-bagh-rest857156",
            text: "RESTAURANT_MENU",
            type: "WEBLINK",
          },
          widgetId:
            "collectionV5RestaurantListWidget_SimRestoRelevance_food_seo",
        },
        {
          "@type": "type.googleapis.com/swiggy.presentation.food.v2.Restaurant",
          info: {
            id: "16418",
            name: "Subway",
            cloudinaryImageId:
              "RX_THUMBNAIL/IMAGES/VENDOR/2025/6/12/f165a434-143f-42bf-8943-2a5247363cf5_16418.jpg",
            locality: "M Block",
            areaName: "Connaught Place",
            costForTwo: "₹350 for two",
            cuisines: ["sandwich", "Salads", "wrap", "Healthy Food"],
            avgRating: 4.3,
            parentId: "2",
            avgRatingString: "4.3",
            totalRatingsString: "19K+",
            sla: {
              deliveryTime: 12,
              lastMileTravel: 0.6,
              serviceability: "SERVICEABLE",
              slaString: "10-15 mins",
              lastMileTravelString: "0.6 km",
              iconType: "ICON_TYPE_EMPTY",
            },
            availability: {
              nextCloseTime: "2025-12-22 23:59:00",
              opened: true,
            },
            badges: {
              imageBadges: [
                {
                  imageId: "android/static-assets/icons/big_rx.png",
                  description: "bolt!",
                },
              ],
            },
            isOpen: true,
            aggregatedDiscountInfoV2: {},
            type: "F",
            badgesV2: {
              entityBadges: {
                imageBased: {
                  badgeObject: [
                    {
                      attributes: {
                        description: "bolt!",
                        imageId: "android/static-assets/icons/big_rx.png",
                      },
                    },
                  ],
                },
                textBased: {},
                textExtendedBadges: {},
              },
            },
            orderabilityCommunication: {
              title: {},
              subTitle: {},
              message: {},
              customIcon: {},
            },
            differentiatedUi: {
              displayType: "ADS_UI_DISPLAY_TYPE_ENUM_DEFAULT",
              differentiatedUiMediaDetails: {
                mediaType: "ADS_MEDIA_ENUM_IMAGE",
                lottie: {},
                video: {},
              },
            },
            reviewsSummary: {},
            displayType: "RESTAURANT_DISPLAY_TYPE_DEFAULT",
            restaurantOfferPresentationInfo: {},
            externalRatings: {
              aggregatedRating: {
                rating: "--",
              },
            },
            ratingsDisplayPreference: "RATINGS_DISPLAY_PREFERENCE_SHOW_SWIGGY",
          },
          analytics: {
            context: "seo-data-ce620c01-0e6b-4809-aab8-aa0cb8556695",
          },
          cta: {
            link: "https://www.swiggy.com/city/delhi/subway-m-block-connaught-place-rest16418",
            text: "RESTAURANT_MENU",
            type: "WEBLINK",
          },
          widgetId:
            "collectionV5RestaurantListWidget_SimRestoRelevance_food_seo",
        },
        {
          "@type": "type.googleapis.com/swiggy.presentation.food.v2.Restaurant",
          info: {
            id: "242282",
            name: "McDonald's",
            cloudinaryImageId:
              "RX_THUMBNAIL/IMAGES/VENDOR/2025/1/9/8874a698-b2fe-4838-a02f-d4288ba3cdf0_242282.JPG",
            locality: "Rajiv Chowk",
            areaName: "Connaught Place",
            costForTwo: "₹400 for two",
            cuisines: ["American"],
            avgRating: 4.6,
            parentId: "630",
            avgRatingString: "4.6",
            totalRatingsString: "3.3K+",
            sla: {
              deliveryTime: 11,
              lastMileTravel: 0.4,
              serviceability: "SERVICEABLE",
              slaString: "10-15 mins",
              lastMileTravelString: "0.4 km",
              iconType: "ICON_TYPE_EMPTY",
            },
            availability: {
              nextCloseTime: "2025-12-22 23:30:00",
              opened: true,
            },
            badges: {
              imageBadges: [
                {
                  imageId: "android/static-assets/icons/big_rx.png",
                  description: "bolt!",
                },
              ],
            },
            isOpen: true,
            type: "F",
            badgesV2: {
              entityBadges: {
                imageBased: {
                  badgeObject: [
                    {
                      attributes: {
                        description: "bolt!",
                        imageId: "android/static-assets/icons/big_rx.png",
                      },
                    },
                  ],
                },
                textBased: {},
                textExtendedBadges: {},
              },
            },
            aggregatedDiscountInfoV3: {
              header: "ITEMS",
              subHeader: "AT ₹117",
            },
            orderabilityCommunication: {
              title: {},
              subTitle: {},
              message: {},
              customIcon: {},
            },
            differentiatedUi: {
              displayType: "ADS_UI_DISPLAY_TYPE_ENUM_DEFAULT",
              differentiatedUiMediaDetails: {
                mediaType: "ADS_MEDIA_ENUM_IMAGE",
                lottie: {},
                video: {},
              },
            },
            reviewsSummary: {},
            displayType: "RESTAURANT_DISPLAY_TYPE_DEFAULT",
            restaurantOfferPresentationInfo: {},
            externalRatings: {
              aggregatedRating: {
                rating: "4.2",
                ratingCount: "18K+",
              },
              source: "GOOGLE",
              sourceIconImageId: "v1704440323/google_ratings/rating_google_tag",
            },
            ratingsDisplayPreference: "RATINGS_DISPLAY_PREFERENCE_SHOW_SWIGGY",
          },
          analytics: {
            context: "seo-data-ce620c01-0e6b-4809-aab8-aa0cb8556695",
          },
          cta: {
            link: "https://www.swiggy.com/city/delhi/mcdonalds-rajiv-chowk-connaught-place-rest242282",
            text: "RESTAURANT_MENU",
            type: "WEBLINK",
          },
          widgetId:
            "collectionV5RestaurantListWidget_SimRestoRelevance_food_seo",
        },
        {
          "@type": "type.googleapis.com/swiggy.presentation.food.v2.Restaurant",
          info: {
            id: "1054099",
            name: "Dabba & Co.",
            cloudinaryImageId:
              "RX_THUMBNAIL/IMAGES/VENDOR/2025/3/19/ac2f4dc8-14ab-46aa-84b2-54f805807c0e_1054099.jpg",
            locality: "Connaught Place",
            areaName: "Connaught Place",
            costForTwo: "₹200 for two",
            cuisines: ["Home food", "Indian", "Thalis"],
            avgRating: 4.1,
            parentId: "612560",
            avgRatingString: "4.1",
            totalRatingsString: "225",
            sla: {
              deliveryTime: 19,
              lastMileTravel: 1.6,
              serviceability: "SERVICEABLE",
              slaString: "15-20 mins",
              lastMileTravelString: "1.6 km",
              iconType: "ICON_TYPE_EMPTY",
            },
            availability: {
              nextCloseTime: "2025-12-22 23:59:00",
              opened: true,
            },
            badges: {
              imageBadges: [
                {
                  imageId: "android/static-assets/icons/big_rx.png",
                  description: "bolt!",
                },
              ],
            },
            isOpen: true,
            type: "F",
            badgesV2: {
              entityBadges: {
                imageBased: {
                  badgeObject: [
                    {
                      attributes: {
                        description: "bolt!",
                        imageId: "android/static-assets/icons/big_rx.png",
                      },
                    },
                  ],
                },
                textBased: {},
                textExtendedBadges: {},
              },
            },
            aggregatedDiscountInfoV3: {
              header: "ITEMS",
              subHeader: "AT ₹40",
            },
            orderabilityCommunication: {
              title: {},
              subTitle: {},
              message: {},
              customIcon: {},
            },
            differentiatedUi: {
              displayType: "ADS_UI_DISPLAY_TYPE_ENUM_DEFAULT",
              differentiatedUiMediaDetails: {
                mediaType: "ADS_MEDIA_ENUM_IMAGE",
                lottie: {},
                video: {},
              },
            },
            reviewsSummary: {},
            displayType: "RESTAURANT_DISPLAY_TYPE_DEFAULT",
            restaurantOfferPresentationInfo: {},
            externalRatings: {
              aggregatedRating: {
                rating: "--",
              },
            },
            ratingsDisplayPreference: "RATINGS_DISPLAY_PREFERENCE_SHOW_SWIGGY",
          },
          analytics: {
            context: "seo-data-ce620c01-0e6b-4809-aab8-aa0cb8556695",
          },
          cta: {
            link: "https://www.swiggy.com/city/delhi/dabba-and-co-connaught-place-rest1054099",
            text: "RESTAURANT_MENU",
            type: "WEBLINK",
          },
          widgetId:
            "collectionV5RestaurantListWidget_SimRestoRelevance_food_seo",
        },
      ],
      theme: "SeoRestaurantListingGridWidget",
    },
  },
};

console.log(resObj);
const Body = () => {
  return (
    <div className="body">
      <div className="search">Search</div>
      <div className="restaurent-container">
        {resObj.gridElements.infoWithStyle.restaurants.map((restaurant) => (
          <RestaurentCard key={restaurant.info.id} resData={restaurant.info} />
        ))}
      </div>
    </div>
  );
};
const RestaurentCard = (props) => {
  const { resData } = props; //destructuring the props object is javaScript feature
  const { name, cuisines, costForTwo, avgRating, sla } = resData;
  return (
    <div className="res-card">
      <img
        className="res-logo"
        src={
          "https://media-assets.swiggy.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_660/" +
          resData.cloudinaryImageId
        }
      />
      <h3>{name}</h3>
      <h5>{cuisines.join(", ")}</h5>
      <h5>{costForTwo}</h5>
      <h5>{avgRating} ⭐</h5>
      <h5>{sla.slaString}</h5>
    </div>
  );
};
const AppLayout = () => {
  return (
    <div className="app">
      <Header />
      <Body />
    </div>
  );
};

const root = ReactDOM.createRoot(document.getElementById("root"));

//react dom take this object heading and convert to html and replaced whatever we have in root id
root.render(<AppLayout />);
