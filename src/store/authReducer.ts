import { createSlice, PayloadAction } from "@reduxjs/toolkit";

interface UserState {
  name: string | null;
  uid: string | null;
}

const initialState: UserState = {
  name: "guest",
  uid: null,
};

const authSlice = createSlice({
  name: "auth",
  initialState,
  reducers: {
    setUser(state, action: PayloadAction<UserState>) {
      state.name = action.payload.name;
      state.uid = action.payload.uid;
    },
    logout(state) {
      console.log("LOGOUT!!!");
      state.name = "guest";
      state.uid = null;
    },
  },
});

export const { setUser, logout } = authSlice.actions;

export default authSlice.reducer;
