import { createSlice } from "@reduxjs/toolkit";

export const loaderSlice = createSlice({
  name: "loader",
  initialState: { value: false },
  reducers: {
    loader: function (state, action) {
        console.log("in loader reducer printing in action==>",action.payload);
        state.value=action.payload;
    },
  },
});

export const { loader } = loaderSlice.actions;
export default loaderSlice.reducer;
