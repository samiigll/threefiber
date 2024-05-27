import { useGLTF } from "@react-three/drei";
import { useRef, useEffect } from "react";

export default function Table(props) {
  const groupRef = useRef();
  const { nodes, materials } = useGLTF("/table.gltf");

  useEffect(() => {
    console.log("nodes", nodes);
    console.log("materials", materials);
  }, [nodes, materials]);

  if (!nodes || !nodes.table) {
    console.error("Table geometry not found in nodes.");
    return null;
  }

  return (
    <group ref={groupRef} {...props} dispose={null}>
      <mesh castShadow receiveShadow geometry={nodes.table.geometry}>
        <meshStandardMaterial color="#A0522D" />
      </mesh>
    </group>
  );
}
