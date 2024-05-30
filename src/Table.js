import React, { useRef } from "react";
import { useGLTF } from "@react-three/drei";

function Table(props) {
  // Referans Oluşturma
  const groupRef = useRef();

  // Model Yükleme
  const { nodes } = useGLTF("/models/table.gltf");

  // Geometri Kontrolü
  if (!nodes || !nodes.table) {
    console.error("Table geometry not found in nodes.");
    return null;
  }

  // Masa Render Etme
  return (
    <group ref={groupRef} {...props} dispose={null}>
      <mesh castShadow receiveShadow geometry={nodes.table.geometry}>
        <meshStandardMaterial color="#A0522D" />
      </mesh>
    </group>
  );
}

export default Table;
