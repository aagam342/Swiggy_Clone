import React from "react";
import { useDispatch, useSelector } from "react-redux";
import ItemList from "./ItemList";
import { clearCart } from "../../utils/cartSlice";

const Cart = () => {
  const cartItems = useSelector((store) => store.cart.items);
  const dispatch = useDispatch();
  const handleClearCart = () => {
    dispatch(clearCart());
  };
  return (
    <div className="text-center m-4 p-4">
      <h1 className="font-bold text-2xl uppercase font-serif">Cart</h1>
      <button
        className="m-2 p-2 rounded-lg bg-red-400 border-black hover:scale-110"
        onClick={handleClearCart}
      >
        {" "}
        Clear cart
      </button>
      {cartItems.length === 0 ? (
        <p className="font-light">Cart is empty. Add items to the cart</p>
      ) : (
        " "
      )}
      <div className="w-6/12 m-auto">
        <ItemList items={cartItems} />
      </div>
    </div>
  );
};

export default Cart;
