import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  status: false,
  userData: null,
};

const authSlice = createSlice({
  name: "auth",
  initialState,
  reducers: {
    login: (state, action) => {
      state.status = true;
      state.userData = action.payload?.userData || action.payload; // Ensure proper data access
      localStorage.setItem("userData", JSON.stringify(state.userData)); // Persist user session
    },
    logout: (state) => {
      state.status = false;
      state.userData = null;
      localStorage.removeItem("userData"); // Clear session on logout
    },
  },
});

export const { login, logout } = authSlice.actions;
export default authSlice.reducer;
