import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  selectedTable: null,
  selectedPlate: null,
  plateCount: 0,
  selectedItems: [],
};

const sceneSlice = createSlice({
  name: "scene",
  initialState,
  reducers: {
    selectTable(state, action) {
      state.selectedTable = action.payload;
    },
    selectPlate(state, action) {
      state.selectedPlate = action.payload;
    },
    setPlateCount(state, action) {
      state.plateCount = action.payload;
    },
    updatePlates(state) {
      state.selectedItems = Array(state.plateCount).fill(state.selectedPlate);
    },
  },
});

export const { selectTable, selectPlate, setPlateCount, updatePlates } =
  sceneSlice.actions;
export default sceneSlice.reducer;
