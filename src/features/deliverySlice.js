import { createSlice } from "@reduxjs/toolkit";
import axios from "../utils/axios";

export const deliverySlice = createSlice({
  name: "delivery",
  initialState: {
    deliveries: [],
    delivery: {},
    isLoading: false,
    error: "",
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
    getAllDeliveries: (state, action) => {
      state.deliveries = action.payload;
    },
    getDeliveryById: (state, action) => {
      state.delivery = action.payload;
    },
  },
});

export const {
  apiCallBegan,
  apiCallEnded,
  apiCallFailed,
  getAllDeliveries,
  getDeliveryById,
} = deliverySlice.actions;

export const getAllDeliveriesAsync = () => async (dispatch) => {
  dispatch(apiCallBegan());

  try {
    const { data } = await axios.get("api/v1/deliveries");
    dispatch(getAllDeliveries(data));
    dispatch(apiCallEnded());
  } catch (error) {
    dispatch(apiCallFailed(error.message));
    dispatch(apiCallEnded());
  }
};

export const getAllDeliveriesForUserAsync = () => async (dispatch) => {
  dispatch(apiCallBegan());

  try {
    const { data } = await axios.get("api/v1/deliveries/for-user");
    dispatch(getAllDeliveries(data));
    dispatch(apiCallEnded());
  } catch (error) {
    dispatch(apiCallFailed(error.message));
    dispatch(apiCallEnded());
  }
};

export const getDeliveriesByStatusForUserAsync =
  (status) => async (dispatch) => {
    dispatch(apiCallBegan());

    try {
      const { data } = await axios.get(
        `api/v1/deliveries/for-user/status?status=${status}`
      );
      dispatch(getAllDeliveries(data));
      dispatch(apiCallEnded());
    } catch (error) {
      dispatch(apiCallFailed(error.message));
      dispatch(apiCallEnded());
    }
  };

export const getAllDeliveriesForRiderAsync = () => async (dispatch) => {
  dispatch(apiCallBegan());

  try {
    const { data } = await axios.get("api/v1/deliveries/for-rider");
    dispatch(getAllDeliveries(data));
    dispatch(apiCallEnded());
  } catch (error) {
    dispatch(apiCallFailed(error.message));
    dispatch(apiCallEnded());
  }
};

export const getDeliveriesByStatusForRiderAsync =
  (status) => async (dispatch) => {
    dispatch(apiCallBegan());

    try {
      const { data } = await axios.get(
        `api/v1/deliveries/for-rider/status?status=${status}`
      );
      dispatch(getAllDeliveries(data));
      dispatch(apiCallEnded());
    } catch (error) {
      dispatch(apiCallFailed(error.message));
      dispatch(apiCallEnded());
    }
  };

export const getDeliveryByIdAsync = (id) => async (dispatch) => {
  dispatch(apiCallBegan());

  try {
    const { data } = await axios.get(`api/v1/delivery/detail/${id}`);
    dispatch(getDeliveryById(data));
    dispatch(apiCallEnded());
  } catch (error) {
    dispatch(apiCallFailed(error.message));
    dispatch(apiCallEnded());
  }
};

export const selectLoading = (state) => state.delivery.isLoading;
export const selectError = (state) => state.delivery.error;
export const selectDeliveries = (state) => state.delivery.deliveries;
export const selectDelivery = (state) => state.delivery.delivery;

export default deliverySlice.reducer;
