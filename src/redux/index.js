import { combineReducers, configureStore, getDefaultMiddleware } from "@reduxjs/toolkit";
import storage from "redux-persist/lib/storage";
import { persistReducer } from "redux-persist";

import employees from "./employees";
import global from "./global";

const reducer = combineReducers({
  global,
  employees,
});
const persistConfig = {
  key: "root",

  storage,
};
const persistedReducer = persistReducer(persistConfig, reducer);
const store = configureStore({
  reducer: persistedReducer,
  middleware: getDefaultMiddleware({
    thunk: true,
  }),
});
export default store;
