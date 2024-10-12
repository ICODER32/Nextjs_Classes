import { createSlice } from "@reduxjs/toolkit";

const counterSlice = createSlice({
  name: "counter",
  initialState: 10,
  reducers: {
    increment: (state, { payload }) => {
      console.log(payload);
      return state + payload;
    },
    decrement: (state) => state - 1,
    reset: (state) => 0,
  },
});

export default counterSlice.reducer;

export const { increment, decrement, reset } = counterSlice.actions;
