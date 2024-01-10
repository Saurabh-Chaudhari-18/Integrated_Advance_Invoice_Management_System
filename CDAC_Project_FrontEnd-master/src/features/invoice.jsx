import { createSlice } from "@reduxjs/toolkit";

export const invoiceSlice = createSlice({
  name: "invoice",
  initialState: { value: [] },
  reducers: {
    invoices: function (state, action) {
        console.log("in invoice reducer printing in action==>",action.payload);
        state.value=action.payload;
    },
  },
});

export const { invoices } = invoiceSlice.actions;
export default invoiceSlice.reducer;
