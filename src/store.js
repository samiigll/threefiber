import { configureStore } from "@reduxjs/toolkit";
import sceneReducer from "./features/sceneSlice";
import sidePanelReducer from "./features/sidePanelSlice"; // Eğer hala kullanıyorsanız

const store = configureStore({
  reducer: {
    scene: sceneReducer,
    sidePanel: sidePanelReducer, // Kullanıyorsanız ekleyin
  },
});

export default store;
