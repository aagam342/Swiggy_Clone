// import Body from "../Components/Body";
// import { fireEvent, render, screen } from "@testing-library/react";
// import "@testing-library/jest-dom";
// import MOCK_DATA from "../mocks/ResListMockData.json";
// import { act } from "react-dom/test-utils";
// import { BrowserRouter } from "react-router-dom";

// global.fetch = jest.fn(() => {
//   return Promise.resolve({
//     json: () => {
//       return Promise.resolve(MOCK_DATA);
//     },
//   });
// });

// it("Should render the Body Component with Search button", async () => {
//   await act(async () =>
//     render(
//       <BrowserRouter>
//         <Body />
//       </BrowserRouter>
//     )
//   );

//   const searchBtn = screen.getByRole("button", { name: "Search" });
//   expect(searchBtn).toBeInTheDocument();
// });

// it("Should Implement the Search functionality", async () => {
//   await act(async () =>
//     render(
//       <BrowserRouter>
//         <Body />
//       </BrowserRouter>
//     )
//   );

//   const cardsBeforeSearch = screen.getAllByTestId("resCard");

//   expect(cardsBeforeSearch.length).toBe(20);

//   const searchBtn = screen.getByTestId("searchBtn");
//   const searchInput = screen.getByTestId("searchInput");

//   fireEvent.change(searchInput, { target: { value: "Food" } });
//   fireEvent.click(searchBtn);

//   const cardsAfterSearch = screen.getAllByTestId("resCard");
//   expect(cardsAfterSearch.length).toBe(2);
// });

// it("Should implement the Top Rated Restaurants functionality", async () => {
//   await act(async () => {
//     render(
//       <BrowserRouter>
//         <Body />
//       </BrowserRouter>
//     );
//   });

//   const TopRatedBtn = screen.getByRole("button", {
//     name: "Top Rated Restaurants",
//   });
//   expect(TopRatedBtn).toBeInTheDocument();

//   const cardsBeforeSearch = screen.getAllByTestId("resCard");
//   expect(cardsBeforeSearch.length).toBe(20);

//   fireEvent.click(TopRatedBtn);
//   const cardsAfterSearch = screen.getAllByTestId("resCard");
//   expect(cardsAfterSearch.length).toBe(18);
// });
