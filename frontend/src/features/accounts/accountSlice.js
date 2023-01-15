import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import accountService from "./accountService";

// Get user from localStorage
const user = JSON.parse(localStorage.getItem("user"));

const initialState = {
  accounts: [],
  isError: false,
  isSuccess: false,
  isLoading: false,
  message: "",
};

// open account
export const createAccount = createAsyncThunk(
  "accounts/create",
  async (accountData, thunkAPI) => {
    try {
      // get token from state in the local storage
      const token = thunkAPI.getState().auth.user.token;

      return await accountService.createAccount(accountData, token);
    } catch (error) {
      const message =
        (error.response &&
          error.response.data &&
          error.response.data.message) ||
        error.message ||
        error.toString();
      return thunkAPI.rejectWithValue(message);
    }
  }
);
export const accountSlice = createSlice({
  name: "account",
  initialState,
  reducers: {
    reset: (state) => {
      state.isLoading = false;
      state.isSuccess = false;
      state.isError = false;
      state.message = "";
    },
  },
  extraReducers: (builder) => {
    builder
      .addCase(createAccount.pending, (state) => {
        state.isLoading = true;
      })
      .addCase(createAccount.fulfilled, (state, action) => {
        state.isLoading = false;
        state.isSuccess = true;
        state.message = action.payload.message;
        state.accounts.push(action.payload);
      })
      .addCase(createAccount.rejected, (state, action) => {
        state.isLoading = false;
        state.isError = true;
        state.message = action.payload;
      });
  },
});

export const { reset } = accountSlice.actions;
export default accountSlice.reducer;
