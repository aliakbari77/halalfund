import { createSlice } from "@reduxjs/toolkit";

const authInitialState = {
  isAuthenticated: false,
};

const authSlice = createSlice({
  name: "authentication",
  initialState: authInitialState,
  reducers: {
    login: (state, actions) => {
      state.isAuthenticated = true;
      localStorage.setItem("user", actions.payload.username);
    },
    logout: (state) => {
      localStorage.removeItem("user");
      state.isAuthenticated = false;
    },
  },
});

export const authActions = authSlice.actions;

export default authSlice.reducer;
