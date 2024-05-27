import { createRoot } from "react-dom/client";
import { Canvas } from "@react-three/fiber";
import { Suspense } from "react";
import { OrbitControls } from "@react-three/drei";
import "./App.css";
import Table from "./Table";
import Plate from "./Plate";

function App() {
  return (
    <div className="App">
      <Canvas
        shadows
        camera={{ position: [-10, 5, 10], fov: 25 }}
        style={{ background: "white" }} // Beyaz arka plan
      >
        <Suspense fallback={null}>
          <ambientLight intensity={0.5} />
          <directionalLight
            color="white"
            position={[5, 10, 10]}
            intensity={1}
            castShadow
          />
          <mesh rotation={[-Math.PI / 2, 0, 0]} position={[0, 0, 0]}>
            <planeGeometry args={[20, 20]} />
            <meshStandardMaterial color="gray" />
          </mesh>
          <Table position={[0, 0, 0]} rotation={[0, 0, 0]} />
          <Plate position={[0, 0, 0]} rotation={[0, 0, 0]} />
          <Plate position={[0, 0, 0]} rotation={[0, 45, 0]} />
          <Plate position={[0, 0, 0]} rotation={[0, 90, 0]} />
          <Plate position={[0, 0, 0]} rotation={[0, 135, 0]} />
          <Plate position={[0, 0, 0]} rotation={[0, 180, 0]} />
          <Plate position={[0, 0, 0]} rotation={[0, 225, 0]} />
          <OrbitControls maxPolarAngle={Math.PI / 2} />
        </Suspense>
      </Canvas>
    </div>
  );
}

createRoot(document.getElementById("root")).render(<App />);

export default App;
