import { useEffect, useState } from "react";

const useRestaurantlist = () => {
  const [listOfRestaurants, setListOfRestaurants] = useState([]);
  const [filteredRestaurants, setFilteredRestaurants] = useState([]);
  const corsProxyUrl = "https://corsproxy.io/?";
  const swiggyApiUrl =
    "https://www.swiggy.com/dapi/restaurants/list/v5?lat=12.9351929&lng=77.62448069999999&is-seo-homepage-enabled=true&page_type=DESKTOP_WEB_LISTING";
  useEffect(() => {
    fetchData();
  }, []);

  const fetchData = async () => {
    const data = await fetch(corsProxyUrl + swiggyApiUrl);



    const json = await data.json();
    setListOfRestaurants(
      json?.data?.cards[1]?.card.card.gridElements?.infoWithStyle?.restaurants
    );
    setFilteredRestaurants(
      json?.data?.cards[1]?.card.card.gridElements?.infoWithStyle?.restaurants
    );
  };
  return [
    listOfRestaurants,
    setListOfRestaurants,
    filteredRestaurants,
    setFilteredRestaurants,
  ];
};
export default useRestaurantlist;
