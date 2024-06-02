import React from "react";
import { Grid } from "@mui/material";
import CanvasPanel from "./components/canvas-panel";
import ControlPanel from "./components/control-panel";

function App() {
  return (
    <Grid container style={{ height: "100vh" }}>
      <Grid item xs={8}>
        <CanvasPanel />
      </Grid>
      <Grid item xs={4}>
        <ControlPanel />
      </Grid>
    </Grid>
  );
}

export default App;
