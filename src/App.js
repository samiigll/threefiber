import React from "react";

import CanvasPanel from "./components/canvas-panel";
import { Grid } from "@mui/material";
import ControlPanel from "./components/control-panel";

function App() {
  return (
    <Grid container style={{ height: "100vh" }}>
      <Grid item xs={6} lg={8}>
        <CanvasPanel />
      </Grid>
      <Grid item xs={6} lg={4}>
        <ControlPanel />
      </Grid>
    </Grid>
  );
}

export default App;
