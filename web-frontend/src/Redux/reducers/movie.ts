import { createSlice } from "@reduxjs/toolkit";
const initialState = null;
const movieSlice = createSlice({
  name: "movie",
  initialState,
  reducers: {
    setMovie: (_state, action) => action.payload,
  },
});

export const { setMovie } = movieSlice.actions;
export default movieSlice.reducer;
