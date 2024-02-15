import { CDN_URL } from "../../utils/constants";
const RestaurantCard = (props) => {
  const { resData } = props;
  const { name, cuisines, costForTwo, avgRating, areaName } = resData?.info;

  console.log(resData);

  return (
    <div
      data-testid="resCard"
      className=" m-2 w-52 h-[250] rounded-lg  hover:bg-gray-100 transform transition-transform duration-500 ease-in-out "
    >
      <img
        src={CDN_URL + resData.info.cloudinaryImageId}
        alt="food-logo"
        className="w-52 h-32 rounded-lg "
      />
      <div className="p-3">
        <h3 className="font-semibold text-lg overflow-hidden whitespace-nowrap overflow-ellipsis">
          {name}
        </h3>
        <div className="flex font-semibold">
          <h5 className="mr-2">
            <div className="flex items-center">
              <img
                src="https://cdn2.iconfinder.com/data/icons/greenline/512/star-512.png"
                alt="star-rating"
                className="w-5 h-5 mr-1"
              />

              {avgRating}
              {" | "}
            </div>
          </h5>
          <h5>{costForTwo} </h5>
        </div>
        <h5 className="overflow-hidden whitespace-nowrap overflow-ellipsis text-gray-700 ">
          {cuisines.slice(0, 4).join(", ")}
        </h5>
        <h5 className="text-gray-700">{areaName}</h5>
      </div>
    </div>
  );
};

export const withOpenLabel = (RestaurantCard) => {
  return (props) => {
    return (
      <div>
        <label className="absolute bg-black bg-opacity-50 text-slate-50 p-1 rounded -m-2 z-10">
          Open
        </label>
        <RestaurantCard {...props} />
      </div>
    );
  };
};

export default RestaurantCard;
