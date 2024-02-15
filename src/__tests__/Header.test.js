// import Header from "../Components/Header";
// import { BrowserRouter } from "react-router-dom";
// import { Provider } from "react-redux";
// import "@testing-library/jest-dom";
// import AppStore from "../../utils/AppStore";
// import { screen, render, fireEvent } from "@testing-library/react";

// it("Should render Header Component with a login button", () => {
//   render(
//     <BrowserRouter>
//       <Provider store={AppStore}>
//         <Header />
//       </Provider>
//     </BrowserRouter>
//   );

//   const Login = screen.getByRole("button", { name: "Login" });

//   expect(Login).toBeInTheDocument();
// });

// it("Should render Header Component with a login button", () => {
//   render(
//     <BrowserRouter>
//       <Provider store={AppStore}>
//         <Header />
//       </Provider>
//     </BrowserRouter>
//   );

//   const loginButton = screen.getByRole("button", { name: "Login" });

//   fireEvent.click(loginButton);

//   const logoutButton = screen.getByRole("button", { name: "Logout" });

//   expect(logoutButton).toBeInTheDocument();
// });

// it("Should render Header Component with 0 items", () => {
//   render(
//     <BrowserRouter>
//       <Provider store={AppStore}>
//         <Header />
//       </Provider>
//     </BrowserRouter>
//   );

//   const cartItems = screen.getByText("Cart (0)");

//   expect(cartItems).toBeInTheDocument();
// });

// it("Should render Header Component with  Cart", () => {
//   render(
//     <BrowserRouter>
//       <Provider store={AppStore}>
//         <Header />
//       </Provider>
//     </BrowserRouter>
//   );

//   const cartItems = screen.getByText(/Cart/);

//   expect(cartItems).toBeInTheDocument();
// });
