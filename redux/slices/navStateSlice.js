import { createSlice, current } from "@reduxjs/toolkit";

export const navStateSlice = createSlice({
  name: "navState",
  initialState: { subNav: false, navDir: "" },
  reducers: {
    setSubNav: (state, action) => {
      state.subNav = action.payload.subNav;
      state.navDir = action.payload.navDir;
    },
  },
});

export const { setSubNav } = navStateSlice.actions;

export default navStateSlice.reducer;
