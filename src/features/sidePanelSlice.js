// src/features/sidePanelSlice.js
import { createSlice } from "@reduxjs/toolkit";

export const sidePanelSlice = createSlice({
  name: "sidePanel",
  initialState: {
    tabValue: "1",
  },
  reducers: {
    setTabValue: (state, action) => {
      state.tabValue = action.payload;
    },
  },
});

export const { setTabValue } = sidePanelSlice.actions;

export default sidePanelSlice.reducer;
