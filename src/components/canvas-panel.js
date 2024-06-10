import { Canvas } from "@react-three/fiber";
import React from "react";
import Table from "../Table";
import Plate from "../Plate";
import Plate2 from "../Plate2";
import { OrbitControls } from "@react-three/drei";
import { useSelector } from "react-redux";

function CanvasPanel() {
  const selectedTable = useSelector((state) => state.scene.selectedTable);
  const selectedPlate = useSelector((state) => state.scene.selectedPlate);
  const plateCount = useSelector((state) => state.scene.plateCount);

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

  const renderPlates = (selectedPlate, count) => {
    if (!selectedPlate) return null;

    const plates = [];
    const tableRadius = 0; // Masanın yarıçapı (yaklaşık olarak)
    const tableHeight = 0; // Masanın yüzey yüksekliği
    const angleStep = (2 * Math.PI) / count; // Her bir tabak arasındaki açı

    for (let i = 0; i < count; i++) {
      const angle = i * angleStep;
      const x = tableRadius * Math.cos(angle);
      const z = tableRadius * Math.sin(angle);
      const position = [x, tableHeight, z]; // Tabakları masanın üzerine dairesel olarak yerleştir
      const rotation = [0, -angle, 0]; // Tabakları masanın merkezine doğru döndür

      if (selectedPlate.id === 1) {
        plates.push(<Plate key={i} position={position} rotation={rotation} />);
      } else if (selectedPlate.id === 2) {
        plates.push(<Plate2 key={i} position={position} rotation={rotation} />);
      }
    }
    return plates;
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

      {/* Seçilen Tabaklar */}
      {renderPlates(selectedPlate, plateCount)}

      {/* Kamera Kontrolü */}
      <OrbitControls maxPolarAngle={Math.PI / 2} />
    </Canvas>
  );
}

export default CanvasPanel;
