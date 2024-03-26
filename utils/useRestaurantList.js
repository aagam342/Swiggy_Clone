import { useEffect, useState } from "react";

const useRestaurantlist = () => {
  const [listOfRestaurants, setListOfRestaurants] = useState([]);
  const [filteredRestaurants, setFilteredRestaurants] = useState([]);
  const [error, setError] = useState(null);
  const corsProxyUrl = "https://corsproxy.io/?";
  const swiggyApiUrl =
    "https://www.swiggy.com/dapi/restaurants/list/v5?lat=12.9351929&lng=77.62448069999999&is-seo-homepage-enabled=true&page_type=DESKTOP_WEB_LISTING";

  useEffect(() => {
    fetchData();
  }, []);

  const fetchData = async () => {
    try {
      const data = await fetch(corsProxyUrl + swiggyApiUrl);
      const json = await data.json();
      console.log(json);
      if (json && json.data && json.data.cards) {
        const restaurants =
          json.data.cards[2]?.card.card.gridElements?.infoWithStyle
            ?.restaurants;

        if (restaurants) {
          setListOfRestaurants(restaurants);
          setFilteredRestaurants(restaurants);
        } else {
          setError("Unable to extract restaurant data from the response.");
        }
      } else {
        setError("Invalid data structure in the response.");
      }
    } catch (error) {
      setError("Error fetching data: " + error.message);
      console.log(error);
    }
  };

  return [
    listOfRestaurants,
    setListOfRestaurants,
    filteredRestaurants,
    setFilteredRestaurants,
    error,
  ];
};

export default useRestaurantlist;
