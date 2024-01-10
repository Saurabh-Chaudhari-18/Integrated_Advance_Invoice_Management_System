import { createSlice } from "@reduxjs/toolkit";

export const paymentSlice = createSlice({
  name: "payment",
  initialState: { value: [] },
  reducers: {
    payment: function (state, action) {
        console.log("in payments reducer printing in action==>",action.payload);
        state.value=action.payload;
    },
  },
});

export const { payment } = paymentSlice.actions;
export default paymentSlice.reducer;
