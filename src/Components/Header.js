import { useState, useContext } from "react";
import { LOGO_URL } from "../../utils/constants";
import { Link } from "react-router-dom";
import useOnlineStatus from "../../utils/useOnlineStatus";
import UserContext from "../../utils/userContext";
import { useSelector } from "react-redux";

const Header = () => {
  const [btnNameReact, setBtnNameReact] = useState("Login");
  const onlineStatus = useOnlineStatus();
  const { loggedInUser } = useContext(UserContext);

  const cartItems = useSelector((store) => store.cart.items);
  return (
    <div className="flex font-serif justify-between bg-[#004687] color  shadow-md   text-gray-50 ">
      <div className="flex">
        <Link to="/">
          <img src={LOGO_URL} className="w-28  py-2 px-4 hover:scale-110" />
        </Link>
        <p className=" my-auto">
          Welcome!! {loggedInUser}
          {onlineStatus ? "🟢" : "🔴"}
        </p>
      </div>
      <div className="flex items-center ">
        <ul className=" flex p-2 m-4 ">
          <li className=" px-4 hover:scale-110">
            <Link to="/">Home</Link>
          </li>

          <li className=" px-4 hover:scale-110">
            <Link to="/about">About </Link>
          </li>
          <li className=" px-4 hover:scale-110">
            <Link to="/grocery">Grocery</Link>
          </li>
          <li className=" px-4 hover:scale-110">
            <Link to="/contact">Contact</Link>
          </li>

          <li className=" px-4 hover:scale-110">
            <Link to="/cart">Cart ({cartItems.length})</Link>
          </li>
          <button
            className="login-btn hover:scale-110"
            onClick={() => {
              btnNameReact == "Login"
                ? setBtnNameReact("Logout")
                : setBtnNameReact("Login");
            }}
          >
            {btnNameReact}
          </button>
        </ul>
      </div>
    </div>
  );
};

export default Header;
