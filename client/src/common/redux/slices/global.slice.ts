import { createSlice } from "@reduxjs/toolkit";

interface GlobalState {
  theme: string;
}

export const initialState: GlobalState = {
  theme: "light",
};

export const globalSlice = createSlice({
  name: "global",
  initialState,
  reducers: {
    setTheme: (state, action) => {
      state.theme = action.payload;
    },
  },
});

export const {} = globalSlice.actions;
export default globalSlice.reducer;
