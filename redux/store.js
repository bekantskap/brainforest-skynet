import { combineReducers, configureStore } from "@reduxjs/toolkit";
import navstateReducer from "../redux/slices/navStateSlice";

export default configureStore({
  reducer: {
    navState: navstateReducer,
  },
});
