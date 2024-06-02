import { createSlice } from "@reduxjs/toolkit";

export const sceneSlice = createSlice({
  name: "scene",
  initialState: {
    selectedTable: null,
    selectedItems: [],
  },
  reducers: {
    selectTable: (state, action) => {
      state.selectedTable = action.payload;
    },
    addItem: (state, action) => {
      state.selectedItems.push(action.payload);
    },
  },
});

export const { selectTable, addItem } = sceneSlice.actions;

export default sceneSlice.reducer;
