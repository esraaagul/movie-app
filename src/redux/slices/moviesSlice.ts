import { createSlice, PayloadAction } from "@reduxjs/toolkit";

interface MovieState {
  searchQuery: string;
}

const initialState: MovieState = {
  searchQuery: "",
};

const moviesSlice = createSlice({
  name: "movies",
  initialState,
  reducers: {
    setSearchQuery: (state, action: PayloadAction<string>) => {
      state.searchQuery = action.payload;
    },
  },
});

export const { setSearchQuery } = moviesSlice.actions;
export const moviesReducer = moviesSlice.reducer;
