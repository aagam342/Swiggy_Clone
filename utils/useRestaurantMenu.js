import { useState, useEffect } from "react";
import { MENU_API } from "../utils/constants";

const useRestaurantMenu = (resId) => {
  const [resInfo, setResInfo] = useState(null);
  const [error, setError] = useState(null);

  useEffect(() => {
    fetchMenu();
  }, []);

  const fetchMenu = async () => {
    try {
      const data = await fetch(
        `https://corsproxy.io/?https://www.swiggy.com/dapi/menu/pl?page-type=REGULAR_MENU&complete-menu=true&lat=12.9351929&lng=77.62448069999999&restaurantId=${resId}`
      );

      if (!data.ok) {
        throw new Error(`Failed to fetch menu. Status: ${data.status}`);
      }

      const json = await data.json();
      setResInfo(json.data);
    } catch (error) {
      setError(error.message);
    }
  };

  return { resInfo, error };
};

export default useRestaurantMenu;
