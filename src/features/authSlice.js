import { createSlice } from "@reduxjs/toolkit";
// import axios from "../utils/axios";

const authSlice = createSlice({
  name: "auth",
  initialState: {
    isLoading: false,
    error: "",
    currentUser: null,
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
    setCurrentUser: (state, action) => {
      state.currentUser = action.payload;
    },
  },
});

export const { apiCallBegan, apiCallEnded, apiCallFailed, setCurrentUser } =
  authSlice.actions;

// export const login = (data) => async (dispatch) => {
//   dispatch(apiCallBegan());

//   try {
//     const { headers } = await axios.post("login", data);
//     sessionStorage.setItem("token", headers.authorization);

//     dispatch(apiCallEnded());
//   } catch (error) {
//     dispatch(apiCallFailed(error.message));
//     dispatch(apiCallEnded());
//   }
// };

export const selectLoading = (state) => state.auth.isLoading;
export const selectError = (state) => state.auth.error;
export const selectCurrentUser = (state) => state.auth.currentUser;

export default authSlice.reducer;
