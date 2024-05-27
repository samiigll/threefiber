import React, { useRef } from "react";
import { useGLTF } from "@react-three/drei";

export default function Plate(props) {
  const groupRef = useRef();
  const { nodes } = useGLTF("/plate.gltf");

  return (
    <group ref={groupRef} {...props} dispose={null}>
      <mesh castShadow receiveShadow geometry={nodes.plate.geometry}>
        <meshStandardMaterial color="white" />
      </mesh>
    </group>
  );
}
