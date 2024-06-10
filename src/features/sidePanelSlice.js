import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  tabValue: "1",
};

const sidePanelSlice = createSlice({
  name: "sidePanel",
  initialState,
  reducers: {
    setTabValue(state, action) {
      state.tabValue = action.payload;
    },
  },
});

export const { setTabValue } = sidePanelSlice.actions;
export default sidePanelSlice.reducer;
