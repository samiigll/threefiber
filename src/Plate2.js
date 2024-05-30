import React, { useRef } from "react";
import { useGLTF } from "@react-three/drei";

function Plate2(props) {
  // Referans Oluşturma
  const groupRef = useRef();

  // Model Yükleme
  const { nodes } = useGLTF("/models/plate2.gltf");

  // Geometri Kontrolü
  if (!nodes || !nodes.plate2) {
    console.error("Plate2 geometry not found in nodes.");
    return null;
  }

  // Plaka Render Etme
  return (
    <group ref={groupRef} {...props} dispose={null}>
      <mesh castShadow receiveShadow geometry={nodes.plate2.geometry}>
        <meshStandardMaterial color="red" />
      </mesh>
    </group>
  );
}

export default Plate2;
