import React from "react";
import { render, screen, fireEvent } from "@testing-library/react";
import { BrowserRouter } from "react-router-dom";
import { Provider } from "react-redux";
import { store } from "../../../Redux/store";
import Navbar from "../Navbar";

describe("Navbar component", () => {
  it("renders home icon and search bar on dashboard page", () => {
    render(
      <Provider store={store}>
        <BrowserRouter>
          <Navbar />
        </BrowserRouter>
      </Provider>
    );

    // Test search bar and input
    const searchBar = screen.getByTestId("search-bar");
    expect(searchBar).toBeInTheDocument();
    const input = screen.getByRole("textbox");
    expect(input).toBeInTheDocument();
  });
});
