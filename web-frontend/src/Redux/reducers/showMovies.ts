import { createSlice } from "@reduxjs/toolkit";
const initialState = {
  movie: [],
  reset: false,
};
const showMovieSlice = createSlice({
  name: "searchedMovie",
  initialState,
  reducers: {
    setShowMovies: (state, action) => {
      state.movie = action.payload;
    },
    resetMovies: (state, action) => {
      state.reset = action.payload;
    },
  },
});

export const { setShowMovies, resetMovies } = showMovieSlice.actions;
export default showMovieSlice.reducer;
