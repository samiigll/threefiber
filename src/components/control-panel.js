import React, { useState } from "react";
import {
  Drawer,
  Box,
  Grid,
  Button,
  FormControl,
  InputLabel,
  Select,
  MenuItem,
  Typography,
} from "@mui/material";
import { ConfigProvider, Segmented } from "antd";
import { useDispatch, useSelector } from "react-redux";
import { setTabValue } from "../features/sidePanelSlice";
import {
  selectTable,
  selectPlate,
  setPlateCount,
  updatePlates,
} from "../features/sceneSlice";

const products = {
  table: [
    {
      id: 1,
      name: "Ahşap 1",
      image: "/models/wood1.png",
      model: "/models/wood1.gltf",
    },
    {
      id: 2,
      name: "Ahşap 2",
      image: "/models/wood2.png",
      model: "/models/wood2.gltf",
    },
  ],
  plate: [
    {
      id: 1,
      name: "Tabak 1",
      image: "/models/plate1.png",
      model: "/models/plate1.gltf",
    },
    {
      id: 2,
      name: "Tabak 2",
      image: "/models/plate2.png",
      model: "/models/plate2.gltf",
    },
  ],
};

function ControlPanel() {
  const [open, setOpen] = useState(false);
  const dispatch = useDispatch();
  const tabValue = useSelector((state) => state.sidePanel.tabValue);
  const plateCount = useSelector((state) => state.scene.plateCount);

  const toggleDrawer = (isOpen) => (event) => {
    if (
      event.type === "keydown" &&
      (event.key === "Tab" || event.key === "Shift")
    ) {
      return;
    }
    setOpen(isOpen);
  };

  const options = [
    { label: "Masa", value: "1" },
    { label: "Tabak", value: "2" },
  ];

  const handleItemClick = (product) => {
    if (tabValue === "1") {
      dispatch(selectTable(product));
    } else {
      dispatch(selectPlate(product));
      dispatch(updatePlates()); // Tabak seçildiğinde güncelle
    }
  };

  const selectedProducts = tabValue === "1" ? products.table : products.plate;

  const handlePlateCountChange = (event) => {
    dispatch(setPlateCount(event.target.value));
    dispatch(updatePlates()); // Tabak sayısı değiştiğinde güncelle
  };

  return (
    <div>
      <Button
        onClick={toggleDrawer(true)}
        variant="contained"
        sx={{
          position: "fixed",
          top: 16,
          right: 16,
          backgroundColor: "#1976d2",
          color: "#fff",
        }}
      >
        Menüyü Aç
      </Button>
      <Drawer anchor="right" open={open} onClose={toggleDrawer(false)}>
        <Box
          sx={{
            width: 320,
            backgroundColor: "#f5f5f5",
            height: "100%",
            padding: 2,
          }}
          role="presentation"
        >
          <Box sx={{ borderBottom: 1, borderColor: "divider", padding: 2 }}>
            <ConfigProvider
              theme={{
                components: {
                  Segmented: {
                    trackBg: "#181818",
                    itemColor: "rgba(255, 255, 255, 0.5)",
                    itemHoverColor: "rgba(255, 255, 255, 1)",
                  },
                },
              }}
            >
              <Segmented
                options={options}
                value={tabValue}
                onChange={(newValue) => {
                  dispatch(setTabValue(newValue));
                }}
                block
                size="large"
                style={{
                  height: "48px",
                  display: "flex",
                  justifyContent: "center",
                  alignItems: "center",
                  paddingLeft: "5px",
                  paddingRight: "5px",
                }}
              />
            </ConfigProvider>
          </Box>
          <Typography variant="h6" sx={{ margin: 2 }}>
            Ürünler
          </Typography>
          <Grid container spacing={2} padding={2}>
            {selectedProducts.map((product) => (
              <Grid item xs={6} key={product.id}>
                <Box
                  onClick={() => handleItemClick(product)}
                  sx={{
                    border: "1px solid #ccc",
                    borderRadius: 2,
                    overflow: "hidden",
                    cursor: "pointer",
                    transition: "transform 0.2s",
                    "&:hover": {
                      transform: "scale(1.05)",
                    },
                  }}
                >
                  <img
                    src={product.image}
                    alt={product.name}
                    style={{ width: "100%", display: "block" }}
                  />
                  <Typography variant="body2" align="center">
                    {product.name}
                  </Typography>
                </Box>
              </Grid>
            ))}
          </Grid>
          {tabValue === "2" && (
            <FormControl fullWidth sx={{ marginTop: 2 }}>
              <InputLabel sx={{ transform: "translate(0, -1.5em) scale(1)" }}>
                Tabak Sayısı
              </InputLabel>
              <Select
                value={plateCount}
                onChange={handlePlateCountChange}
                sx={{ marginTop: "0.3em" }}
              >
                <MenuItem value={2}>2 Tabak</MenuItem>
                <MenuItem value={3}>3 Tabak</MenuItem>
                <MenuItem value={4}>4 Tabak</MenuItem>
                <MenuItem value={5}>5 Tabak</MenuItem>
                <MenuItem value={6}>6 Tabak</MenuItem>
                <MenuItem value={7}>7 Tabak</MenuItem>
                <MenuItem value={8}>8 Tabak</MenuItem>
              </Select>
            </FormControl>
          )}
        </Box>
      </Drawer>
    </div>
  );
}

export default ControlPanel;
