// import { render, screen } from "@testing-library/react";
// import Contact from "../Components/Contact";
// import "@testing-library/jest-dom";

// describe("Contact Us Page TestCases", () => {
//   beforeAll(() => {
//     console.log("Before All");
//   });

//   beforeEach(() => {
//     console.log("Before Each");
//   });

//   afterEach(() => {
//     console.log("After Each");
//   });

//   afterAll(() => {
//     console.log("After All");
//   });

//   it("Should load Heading Component in the Contact Page", () => {
//     render(<Contact />);

//     // Querying
//     const heading = screen.getByRole("heading");
//     // Assertion
//     expect(heading).toBeInTheDocument();
//   });

//   it("Should load Button Component in the Contact Page", () => {
//     render(<Contact />);
//     const button = screen.getByRole("button");
//     expect(button).toBeInTheDocument();
//   });

//   it("Should load Text 'Name' Component in the Contact Page", () => {
//     render(<Contact />);
//     const text = screen.getByPlaceholderText("Name");
//     expect(text).toBeInTheDocument();
//   });

//   it("Should load TextBox/Input Component in the Contact Page", () => {
//     render(<Contact />);
//     const inputboxes = screen.getAllByRole("textbox");
//     expect(inputboxes.length).toBe(2);
//   });
// });
