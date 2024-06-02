import { Canvas } from "@react-three/fiber";
import React from "react";
import Table from "../Table";
import { OrbitControls } from "@react-three/drei";
import { useSelector } from "react-redux";
import Plate from "../Plate";
import Plate2 from "../Plate2";

function CanvasPanel() {
  const selectedTable = useSelector((state) => state.scene.selectedTable);
  const selectedItems = useSelector((state) => state.scene.selectedItems);

  const renderTable = (selectedTable) => {
    switch (selectedTable?.id) {
      case 1:
        return <Table position={[0, 0, 0]} />;
      case 2:
        return <Table position={[0, 0, 0]} />;
      default:
        return null;
    }
  };

  const renderItem = (item, index) => {
    switch (item.id) {
      case 1:
        return <Plate key={index} position={[0, 0, 0]} />;
      case 2:
        return <Plate2 key={index} position={[0, 0, 0]} />;
      default:
        return null;
    }
  };

  return (
    <Canvas camera={{ position: [-10, 5, 10], fov: 30 }}>
      {/* Işıklandırma */}
      <ambientLight intensity={0.5} />
      <directionalLight color="white" position={[0, 10, 5]} />

      {/* Zemin */}
      <mesh rotation={[-Math.PI / 2, 0, 0]} position={[0, 0, 0]}>
        <planeGeometry args={[10, 10]} />
        <meshStandardMaterial color="gray" />
      </mesh>

      {/* Seçilen Masa */}
      {renderTable(selectedTable)}

      {/* Seçilen Öğeler */}
      {selectedItems.map((item, index) => renderItem(item, index))}

      {/* Kamera Kontrolü */}
      <OrbitControls maxPolarAngle={Math.PI / 2} />
    </Canvas>
  );
}

export default CanvasPanel;
