import React, { useRef } from "react";
import { useGLTF } from "@react-three/drei";

function Plate(props) {
  // Referans Oluşturma
  const groupRef = useRef();

  // Model Yükleme
  const { nodes } = useGLTF("/models/plate.gltf");

  // Geometri Kontrolü
  if (!nodes || !nodes.plate) {
    console.error("Plate geometry not found in nodes.");
    return null;
  }

  // Plaka Render Etme
  return (
    <group ref={groupRef} {...props} dispose={null}>
      <mesh castShadow receiveShadow geometry={nodes.plate.geometry}>
        <meshStandardMaterial color="black" />
      </mesh>
    </group>
  );
}

export default Plate;
