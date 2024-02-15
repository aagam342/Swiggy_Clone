import useRestaurantMenu from "../../utils/useRestaurantMenu";
import Shimmer from "./Shimmer";
import { useParams } from "react-router-dom";
import RestaurantCategory from "./RestaurantCategory";
import { useState } from "react";

const RestaurantMenu = () => {
  const { resId } = useParams();
  const resInfo = useRestaurantMenu(resId);
  const [showIndex, setShowIndex] = useState(-1);

  if (resInfo == null) return <Shimmer />;

  const { name, cuisines, costForTwoMessage } =
    resInfo?.cards[0]?.card?.card?.info;

  const { itemCards } =
    resInfo?.cards[2]?.groupedCard?.cardGroupMap?.REGULAR?.cards[2]?.card?.card;

  const categories =
    resInfo?.cards[2]?.groupedCard?.cardGroupMap?.REGULAR?.cards.filter(
      (c) =>
        c.card?.card?.["@type"] ==
        "type.googleapis.com/swiggy.presentation.food.v2.ItemCategory"
    );

  return (
    <div className="menu text-center  my-6 ">
      <h1 className="text-2xl font-bold ">{name}</h1>
      <p className="text-center font-bold my-2 ">
        {cuisines.join(", ")} - {costForTwoMessage}
      </p>
      <div className="w-[60%] mx-auto">
        {categories.map((category, index) => (
          <RestaurantCategory
            key={category.card.card.title}
            data={category.card.card}
            showItems={index == showIndex ? true : false}
            setShowIndex={() => {
              if (showIndex == index) {
                setShowIndex(-1);
              } else {
                setShowIndex(index);
              }
            }}
          />
        ))}
      </div>
    </div>
  );
};
export default RestaurantMenu;
