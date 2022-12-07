import { createSlice } from "@reduxjs/toolkit";

export const navStateSlice = createSlice({
  name: "navState",
  initialState: false,
  reducers: {
    setSubNav: (state, action) => {
      return (state = action.payload);
    },
  },
});

export const { setSubNav } = navStateSlice.actions;

export default navStateSlice.reducer;
