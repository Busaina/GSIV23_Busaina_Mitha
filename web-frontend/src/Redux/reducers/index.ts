import { combineReducers } from "redux";
import movieReducer from "./movie";
import showMovieReducer from "./showMovies";

const rootReducer = combineReducers({
  movie: movieReducer,
  showMovie: showMovieReducer,
});

export default rootReducer;
