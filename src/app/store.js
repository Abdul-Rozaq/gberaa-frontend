import { configureStore } from "@reduxjs/toolkit";
import counterReducer from "../features/counter/counterSlice";
import deliveryReducer from "../features/deliverySlice";
import userReducer from "../features/userSlice";
import authReducer from "../features/authSlice";

export const store = configureStore({
  reducer: {
    counter: counterReducer,
    delivery: deliveryReducer,
    user: userReducer,
    auth: authReducer,
  },
});
