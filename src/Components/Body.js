import RestaurantCard, { withOpenLabel } from "./RestaurantCard";
import Shimmer from "./Shimmer";
import { Link } from "react-router-dom";
import useOnlineStatus from "../../utils/useOnlineStatus";
import useRestaurantlist from "../../utils/useRestaurantList";
import { useContext, useState } from "react";
import UserContext from "../../utils/userContext";

const Body = () => {
  const [searchText, setSearchText] = useState("");

  const [
    listOfRestaurants,
    setListOfRestaurants,
    filteredRestaurants,
    setFilteredRestaurants,
    error,
  ] = useRestaurantlist();

  const RestaurantCardOpen = withOpenLabel(RestaurantCard);

  const onlineStatus = useOnlineStatus();
  if (onlineStatus == false) {
    return (
      <div>
        <h2>You are offline , Please Check Your Internet Connection.</h2>
      </div>
    );
  }
  const { loggedInUser, setUserName } = useContext(UserContext);
  return error ? (
    // Render an error message
    <div className="error-message shadow-orange-300 shadow-lg bg-red-500 text-white p-10 mt-32 mx-20 rounded-lg shadow-md flex flex-col items-center font-serif">
      <p className="mb-2">{error}.</p>
      <p className="mb-2 text-2xl ">
        Please make sure you have the UltraSurf Security & Privacy Extension
        enabled while using this app, as it utilizes Swiggy's live API for
        development purposes only.
      </p>

      <button
        className="bg-white hover:scale-105 text-red-500 px-4 py-2 rounded-md hover:bg-red-100"
        onClick={() =>
          window.open(
            "https://chromewebstore.google.com/detail/ultrasurf-security-privac/mjnbclmflcpookeapghfhapeffmpodij",
            "_blank"
          )
        }
      >
        Enable UltraSurf Extension
      </button>
    </div>
  ) : listOfRestaurants.length === 0 ? (
    // Render a loading indicator (e.g., Shimmer) when data is still being fetched
    <Shimmer />
  ) : (
    <div className="body w-[90%] mx-auto ">
      <div className="flex justify-between mx-auto">
        <div className="filter flex ">
          <div className=" m-2">
            <input
              placeholder="Restaurant Name"
              type="text"
              data-testid="searchInput"
              className="border-2  border-solid  border-black  m-2 px-2 hover:scale-110  rounded-lg"
              value={searchText}
              onChange={(e) => {
                setSearchText(e.target.value);
              }}
            />
            <button
              className=" m-2 py-1 px-2 bg-green-200 rounded-lg hover:scale-110 "
              data-testid="searchBtn"
              onClick={() => {
                const filteredList = listOfRestaurants.filter((res) =>
                  res.info.name.toLowerCase().includes(searchText.toLowerCase())
                );
                setFilteredRestaurants(filteredList);
              }}
            >
              Search
            </button>
          </div>
          <div className="m-2">
            <button
              className=" bg-red-400  m-2 px-2 py-1 rounded-lg hover:scale-110"
              onClick={() => {
                const filteredList = listOfRestaurants.filter(
                  (res) => res.info.avgRating > 4
                );
                setFilteredRestaurants(filteredList);
              }}
            >
              <div className="flex items-center">
                <img
                  src="https://cdn2.iconfinder.com/data/icons/greenline/512/star-512.png"
                  alt="star-rating"
                  className="w-5 h-5 mr-1 "
                />
                <h5>Top Rated Restaurants</h5>
              </div>
            </button>
          </div>
        </div>
        <div className="m-2 hover:scale-110 mr-10">
          <label>Username: </label>
          <input
            type="text"
            className="border-2  border-solid  border-black  m-2 px-2  rounded-lg"
            value={loggedInUser}
            onChange={(e) => {
              setUserName(e.target.value);
            }}
          />
        </div>
      </div>
      <div className=" flex flex-wrap justify-self-auto">
        {filteredRestaurants.map((restaurant) => (
          <Link
            to={"/restaurants/" + restaurant.info.id}
            key={restaurant.info.id}
            className="mx-5 hover:scale-95 my-2  transform transition-transform duration-500 ease-out"
          >
            {restaurant.info.isOpen ? (
              <RestaurantCardOpen resData={restaurant} />
            ) : (
              <RestaurantCard resData={restaurant} />
            )}
          </Link>
        ))}
      </div>
    </div>
  );
};

export default Body;
