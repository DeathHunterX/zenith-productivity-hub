import { createSlice, PayloadAction } from "@reduxjs/toolkit";

interface UserState {
  info: User | null;
}

export const initialState: UserState = {
  info: null,
};

export const userSlice = createSlice({
  name: "user",
  initialState,
  reducers: {
    setUser: (state, action: PayloadAction<User>) => {
      state.info = action.payload;
    },
    clearUser: (state) => {
      state.info = null;
    },
  },
});

export const { setUser, clearUser } = userSlice.actions;
export default userSlice.reducer;
