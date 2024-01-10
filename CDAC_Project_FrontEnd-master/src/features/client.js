import { createSlice } from "@reduxjs/toolkit";

export const clientSlice = createSlice({
  name: "client",
  initialState: { value: [] },
  reducers: {
    clients: function (state, action) {
        console.log("in cliet reducer printing in action==>",action.payload);
        state.value=action.payload;
    },
  },
});

export const { clients } = clientSlice.actions;
export default clientSlice.reducer;
