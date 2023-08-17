import { act, render, screen, waitFor } from "@testing-library/react";
import { Provider } from "react-redux";
import DetailPage from "../DetailPage";
import { configureStore } from "@reduxjs/toolkit";
import rootReducer from "../../../Redux/reducers";
import { setMovie } from "../../../Redux/reducers/movie";
import configureMockStore from "redux-mock-store";

const mockStore = configureMockStore();

describe("DetailPage component", () => {
  it("renders movie details", async () => {
    const selectedMovieId = "976573";
    const store = mockStore({
      movie: selectedMovieId,
    });

    global.fetch = jest.fn().mockResolvedValue({
      json: jest.fn().mockResolvedValue({
        title: "Elemental",
        runtime: 120,
        credits: {
          crew: [{ job: "Director", name: "John Doe" }],
          cast: [
            { known_for_department: "Acting", name: "Smith" },
            { known_for_department: "Acting", name: "Doe" },
          ],
        },
        vote_average: 7.5,
        release_date: "2023-08-17",
        overview: "Mock movie overview",
        poster_path: "/mock-poster-path.jpg",
      }),
    });

    render(
      <Provider store={store}>
        <DetailPage />
      </Provider>
    );
    await waitFor(() => {
      const movieTitle = screen.getByText("Elemental (7.5)");
      const movieRuntime = screen.getByText("2023 | 02:00 | John Doe");
      const movieOverview = screen.getByText(
        "Description: Mock movie overview"
      );

      expect(movieTitle).toBeInTheDocument();
      expect(movieRuntime).toBeInTheDocument();
      expect(movieOverview).toBeInTheDocument();
    });
  });
});
