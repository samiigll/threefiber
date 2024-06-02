import React, { useState } from "react";
import { Drawer, Box, Grid, Button } from "@mui/material";
import { ConfigProvider, Segmented } from "antd";
import { useDispatch, useSelector } from "react-redux";
import { setTabValue } from "../features/sidePanelSlice";
import { selectTable, addItem } from "../features/sceneSlice";

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
      dispatch(addItem(product));
    }
  };

  const selectedProducts = tabValue === "1" ? products.table : products.plate;

  return (
    <div>
      <Button onClick={toggleDrawer(true)}>Menüyü Aç</Button>
      <Drawer anchor="right" open={open} onClose={toggleDrawer(false)}>
        <Box sx={{ width: 300 }} role="presentation">
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
          <Grid container spacing={2} padding={2}>
            {selectedProducts.map((product) => (
              <Grid item xs={6} key={product.id}>
                <Box onClick={() => handleItemClick(product)}>
                  <img
                    src={product.image}
                    alt={product.name}
                    style={{ width: "100%" }}
                  />
                </Box>
              </Grid>
            ))}
          </Grid>
        </Box>
      </Drawer>
    </div>
  );
}

export default ControlPanel;
