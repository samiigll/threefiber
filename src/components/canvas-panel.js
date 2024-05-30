import { Canvas } from "@react-three/fiber";
import React from "react";
import Table from "../Table";
import Plate from "../Plate";
import Plate2 from "../Plate2";
import { OrbitControls } from "@react-three/drei";

function CanvasPanel() {
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

      {/* Masa */}
      <Table position={[0, 0, 0]} />

      {/* Plakalar */}
      <Plate position={[0, 0, 0]} rotation={[0, 0, 0]} />
      <Plate2 position={[0, 0, 0]} rotation={[0, 0, 0]} />

      {/* Kamera Kontrolü */}
      <OrbitControls maxPolarAngle={Math.PI / 2} />
    </Canvas>
  );
}

export default CanvasPanel;
