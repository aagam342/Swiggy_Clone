import React from "react";
import { CDN_URL } from "../../utils/constants";
import { useDispatch } from "react-redux";
import { addItem } from "../../utils/cartSlice";
const ItemList = ({ items }) => {
  const dispatch = useDispatch();
  const handleAddItem = (item) => {
    dispatch(addItem(item));
  };

  return (
    <div>
      {items.map((item) => (
        <div
          data-testid="foodItem"
          className="m-2 p-2 border-b-2 border-gray-200 text-left flex"
          key={item.card.info.name}
        >
          <div className="w-9/12">
            <div className="py-2 font-semibold">
              <span>{item.card.info.name} | </span>
              <span> Rs. {item.card.info.price / 100}</span>
            </div>
            <p className="text-sm text-pretty font-lightFont">
              {item.card.info.description}
            </p>
          </div>
          <div className="w-3/12">
            <div className="absolute">
              <button
                className="bg-black hover:scale-110  rounded-lg m-10  p-2 bg-opacity-65 text-white"
                onClick={() => handleAddItem(item)}
              >
                Add+
              </button>
            </div>
            <img
              src={CDN_URL + item.card.info.imageId}
              alt="food-image"
              className=" w-full h-28"
            />
          </div>
        </div>
      ))}
    </div>
  );
};

export default ItemList;
