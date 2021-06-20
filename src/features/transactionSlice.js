import { createSlice } from "@reduxjs/toolkit";
import axios from "../utils/axios";

const transactionSlice = createSlice({
  name: "transaction",
  initialState: {
    isLoading: false,
    error: "",
    wallet: 0,
    transactions: {},
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
    getWalletBalance: (state, action) => {
      state.wallet = action.payload;
    },
    getAllTransactionsForUser: (state, action) => {
      state.transactions = action.payload;
    },
  },
});

const {
  apiCallBegan,
  apiCallEnded,
  apiCallFailed,
  getWalletBalance,
  getAllTransactionsForUser,
} = transactionSlice.actions;

export const getWalletBalanceAsync = () => async (dispatch) => {
  dispatch(apiCallBegan());

  try {
    const { data } = await axios.get("api/v1/wallets");
    console.log(data);
    dispatch(getWalletBalance(data));
    dispatch(apiCallEnded());
  } catch (error) {
    dispatch(apiCallFailed(error.message));
    dispatch(apiCallEnded());
  }
};

export const getAllTransactionsForUserAsync = () => async (dispatch) => {
  dispatch(apiCallBegan());

  try {
    const { data } = await axios.get("api/v1/transactions/for-user");
    console.log(data);
    dispatch(getAllTransactionsForUser(data));
    // dispatch(apiCallEnded());
  } catch (error) {
    dispatch(apiCallFailed(error.message));
    dispatch(apiCallEnded());
  }
};

export const selectLoading = (state) => state.transaction.isLoading;
export const selectError = (state) => state.transaction.error;
export const selectWalletBalance = (state) => state.transaction.wallet;
export const selectTransactions = (state) => state.transaction.transactions;

export default transactionSlice.reducer;
