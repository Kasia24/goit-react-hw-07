import { createSlice } from "@reduxjs/toolkit";

const filtersSlice = createSlice({
  name: "filters",
  initialState: {
    name: "",
    number: "",
  },
  reducers: {
    setNameFilter: (state, action) => {
      state.name = action.payload;
    },
    setNumberFilter: (state, action) => {
      state.number = action.payload;
    },
  },
});

export const { setNameFilter, setNumberFilter } = filtersSlice.actions;
export default filtersSlice.reducer;
