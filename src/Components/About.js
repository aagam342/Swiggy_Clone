import { Component } from "react";
import UserClass from "./UserClass";
import UserContext from "../../utils/userContext";

class About extends Component {
  constructor(props) {
    super(props);
    // console.log("Parent Constructor called");
  }

  componentDidMount() {
    // console.log("Parent Component ComponentdidMount");
  }

  render() {
    // console.log("Parent Component Render ");
    return (
      <div className="text-center mx-4 my-2 px-4 py-2 ">
        <UserContext.Consumer>
          {({ loggedInUser }) => (
            <h2 className="font-semibold  uppercase font-sans">
              Hello {loggedInUser}!!
            </h2>
          )}
        </UserContext.Consumer>
        <div className="flex">
          <div className="w-[50%]">
            <h3 className="text-2xl mx-20 mb-2 mt-7 text-start font-serif">
              Integrated Concepts :{" "}
            </h3>
            <div className="mx-20 text-start text-gray-700">
              <ul>
                <li>Parcel - The Powerhouse Bundler 📦</li>
                <li>React Hooks - Supercharging Components ⚛️</li>
                <li>React Reconciliation - Efficient DOM Manipulation 🔄</li>
                <li>Shimmer UI - Enhancing Loading State 🌟</li>
                <li>React-router-dom - Seamless Navigation 🌐</li>
                <li>
                  React Class-based Component - Traditional Yet Powerful 💻
                </li>
                <li>Custom Hooks - Reusable and Efficient 🔄</li>
                <li>
                  Code Splitting and Lazy Loading - Optimal Performance 🚀
                </li>
                <li>Tailwind CSS - Tailored Styling Options 🎨</li>
                <li>Higher Order Component - Enhancing UI Flexibility 🔄</li>
                <li>Redux Toolkit - State Management Excellence 🔄</li>
                <li>
                  React Testing Library and Jest - Ensuring Reliability ✅
                </li>
                <li>Context API - Global State Management 🌐</li>
              </ul>
            </div>
          </div>
          <div className="w-[40%] relative">
            <div className="z-10 absolute">
              <h2 className="px-2 mx-2 mt-10 font-bold text-2xl uppercase font-serif  ">
                Need Food we are here to help you with it.
              </h2>
              <h3 className="mb-3">
                Order food from favourite restaurants near you.
              </h3>
            </div>
            <img
              className="w-full  z-0"
              src="https://img.freepik.com/premium-vector/young-happy-couple-eating-asian-food-box-holding-sticks-sitting-table-japanese-chinese-cuisine-restaurant-cartoon-flat-illustration_87771-7456.jpg?w=740"
              alt="about-logo"
            />
          </div>
        </div>
      </div>
    );
  }
}

export default About;
