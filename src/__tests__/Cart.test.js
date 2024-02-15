import { screen, render, act, fireEvent } from "@testing-library/react";
import MOCK_DATA from "../mocks/ResMenuMockData.json";
import "@testing-library/jest-dom";
import RestaurantMenu from "../Components/RestaurantMenu";
import { Provider } from "react-redux";
import { BrowserRouter } from "react-router-dom";
import Header from "../Components/Header";
import AppStore from "../../utils/AppStore";
import Cart from "../Components/Cart";
global.fetch = jest.fn(() =>
  Promise.resolve({ json: () => Promise.resolve(MOCK_DATA) })
);
describe("Test cases for adding items to the cart", () => {
  it("Should add items to the cart page", async () => {
    await act(async () => {
      render(
        <BrowserRouter>
          <Provider store={AppStore}>
            <Header />
            <RestaurantMenu />
            <Cart />
          </Provider>
        </BrowserRouter>
      );
    });

    const accordianHeader = screen.getByText("Desserts. (4)");

    fireEvent.click(accordianHeader);

    const addBtns = screen.getAllByRole("button", { name: "Add+" });

    fireEvent.click(addBtns[0]);

    expect(screen.getByText("Cart (1)")).toBeInTheDocument();

    expect(screen.getAllByTestId("foodItem").length).toBe(5);

    fireEvent.click(screen.getByRole("button", { name: "Clear cart" }));

    expect(screen.getAllByTestId("foodItem").length).toBe(4);
    expect(
      screen.getByText("Cart is empty. Add items to the cart")
    ).toBeInTheDocument();
  });

    it("Should add items to the cart", async () => {
      await act(async () => {
        render(
          <BrowserRouter>
            <Provider store={AppStore}>
              <Header />
              <RestaurantMenu />
            </Provider>
          </BrowserRouter>
        );
      });

      const accordianHeader = screen.getByText("Desserts. (4)");

      fireEvent.click(accordianHeader);

      const addBtns = screen.getAllByRole("button", { name: "Add+" });

      fireEvent.click(addBtns[0]);

      expect(screen.getByText("Cart (1)")).toBeInTheDocument();
    });

    it("Should add 2 items to the cart", async () => {
      await act(async () => {
        render(
          <BrowserRouter>
            <Provider store={AppStore}>
              <Header />
              <RestaurantMenu />
            </Provider>
          </BrowserRouter>
        );
      });

      const accordianHeader = screen.getByText("Desserts. (4)");

      fireEvent.click(accordianHeader);

      const addBtns = screen.getAllByRole("button", { name: "Add+" });

      fireEvent.click(addBtns[0]);
      fireEvent.click(addBtns[0]);
      expect(screen.getByText("Cart (3)")).toBeInTheDocument();
    });

    it("Should Open the Accordian Header", async () => {
      await act(async () => {
        render(
          <BrowserRouter>
            <Provider store={AppStore}>
              <Header />
              <RestaurantMenu />
            </Provider>
          </BrowserRouter>
        );
      });

      const accordianHeader = screen.getByText("Desserts. (4)");
      expect(accordianHeader).toBeInTheDocument();

      fireEvent.click(accordianHeader);

      expect(screen.getAllByTestId("foodItem").length).toBe(4);
    });

    it("Should render the number of items under accordian header", async () => {
      await act(async () => {
        render(
          <BrowserRouter>
            <Provider store={AppStore}>
              <Header />
              <RestaurantMenu />
            </Provider>
          </BrowserRouter>
        );
      });

      const accordianHeader = screen.getByText("Desserts. (4)");
      expect(accordianHeader).toBeInTheDocument();

      fireEvent.click(accordianHeader);

      expect(screen.getAllByTestId("foodItem").length).toBe(4);
    });
});
