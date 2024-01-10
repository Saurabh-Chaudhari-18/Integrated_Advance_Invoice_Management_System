import { createSlice } from "@reduxjs/toolkit";

export const productSlice = createSlice({
  name: "product",
  initialState: { value: [] },
  reducers: {
    product: function (state, action) {
        console.log("in product reducer printing in action==>",action.payload);
        state.value=action.payload;
    },
  },
});

export const { product } = productSlice.actions;
export default productSlice.reducer;
