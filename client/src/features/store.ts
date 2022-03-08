import { configureStore } from "@reduxjs/toolkit";
import memberReducer from "./memberReducer";
import apicall from "./middleware/api";

const store = configureStore({
  reducer: {
    members: memberReducer,
  },
  middleware: [apicall],
});

export default store;
