import { fireEvent, render, screen, waitFor } from "@testing-library/react";
import Search from ".";

jest.mock("axios", () => ({
  __esModule: true,

  default: {
    get: () => ({
      data: {
        Poster:
          "https://m.media-amazon.com/images/M/MV5BNjM0NTc0NzItM2FlYS00YzEwLWE0YmUtNTA2ZWIzODc2OTgxXkEyXkFqcGdeQXVyNTgwNzIyNzg@._V1_SX300.jpg",
        Title: "Star war",
      },
    }),
  },
}));

test("renders search render", () => {
  render(<Search />);
  const searcElement = screen.getByText(/Search/i);
  expect(searcElement).toBeInTheDocument();
});

test("renders Movies app  render", () => {
  render(<Search />);
  const moviesAppElement = screen.getByTestId("movies");
  expect(moviesAppElement).toBeInTheDocument();
});

//TESTING THE INPUT PLACEHOLDER
test("Search input be render", () => {
  render(<Search />);
  const searchElement = screen.getByPlaceholderText(/search/i);
  expect(searchElement).toBeInTheDocument();
});

//TESTING THE INPUT VALUE
test("Search input should be not empty", () => {
  render(<Search />);
  const searchElement = screen.getByPlaceholderText(/search/i);
  expect(searchElement.value).not.toBe("");
});

// TESTING THE ONCHANGE EVENT
test("Search input should be change", () => {
  render(<Search />);
  const searchElement = screen.getByPlaceholderText(/search/i);
  const testValue = "test";
  fireEvent.change(searchElement, { target: { value: testValue } });
  expect(searchElement.value).toBe(testValue);
});

// TESTING DATA FROM SERVER
test("fetches data from api and displays it", async () => {
  render(<Search />);
  const searchElement = screen.getByPlaceholderText(/search/i);
  const testValue = "test";
  fireEvent.change(searchElement, { target: { value: testValue } });
  await waitFor(()=>expect(searchElement.value).toBe(testValue));
});