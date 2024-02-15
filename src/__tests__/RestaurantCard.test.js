// import { screen, render } from "@testing-library/react";
// import RestaurantCard, { withOpenLabel } from "../Components/RestaurantCard";
// import MOCK_DATA from "../mocks/ResCardMockData.json";
// import "@testing-library/jest-dom";

// it("Should Render the Restaurant Card with the props", () => {
//   render(<RestaurantCard resData={MOCK_DATA} />);

//   const name = screen.getByText("Leon's - Burgers & Wings (Leon Grill)");

//   expect(name).toBeInTheDocument();
// });

// it("Should Render the Open Label Component ", () => {
//   const WrappedComponent = withOpenLabel(RestaurantCard);
//   render(<WrappedComponent resData={MOCK_DATA} />);

//   const label = screen.getByText("Open");

//   expect(label).toBeInTheDocument();
// });
