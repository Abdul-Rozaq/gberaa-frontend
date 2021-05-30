import { createSlice } from "@reduxjs/toolkit";
import axios from "../utils/axios";

const userSlice = createSlice({
  name: "user",
  initialState: {
    isLoading: false,
    error: "",
    customers: [],
    riders: [],
    user: null,
  },
  reducers: {
    apiCallBegan: (state) => {
      state.isLoading = true;
    },
    apiCallEnded: (state) => {
      state.isLoading = false;
    },
    apiCallFailed: (state, action) => {
      state.error = action.payload;
    },
    getAllCustomers: (state, action) => {
      state.customers = action.payload;
    },
    getAllRiders: (state, action) => {
      state.riders = action.payload;
    },
    getCurrentUser: (state, action) => {
      state.user = action.payload;
    },
  },
});

const {
  apiCallBegan,
  apiCallEnded,
  apiCallFailed,
  getAllCustomers,
  getAllRiders,
  getCurrentUser,
} = userSlice.actions;

export const getAllCustomersAsync = () => async (dispatch) => {
  dispatch(apiCallBegan());

  try {
    const { data } = await axios.get("api/v1/users");
    dispatch(getAllCustomers(data));
    dispatch(apiCallEnded());
  } catch (error) {
    dispatch(apiCallFailed(error.message));
    dispatch(apiCallEnded());
  }
};

export const getAllRidersAsync = () => async (dispatch) => {
  dispatch(apiCallBegan());

  try {
    const { data } = await axios.get("api/v1/users/riders");
    dispatch(getAllRiders(data));
    dispatch(apiCallEnded());
  } catch (error) {
    dispatch(apiCallFailed(error.message));
    dispatch(apiCallEnded());
  }
};

export const getCurrentUserAsync = () => async (dispatch) => {
  dispatch(apiCallBegan());

  try {
    const { data } = await axios.get("api/v1/users/me");
    dispatch(getCurrentUser(data));
    dispatch(apiCallEnded());
  } catch (error) {
    dispatch(apiCallFailed(error.message));
    dispatch(apiCallEnded());
  }
};

export const selectLoading = (state) => state.user.isLoading;
export const selectError = (state) => state.user.error;
export const selectCustomers = (state) => state.user.customers;
export const selectRiders = (state) => state.user.riders;
export const selectUser = (state) => state.user.user;

export default userSlice.reducer;
