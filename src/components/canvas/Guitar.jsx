import React, { Suspense } from "react";
import { Canvas } from "@react-three/fiber";
import { OrbitControls, Preload, useGLTF } from "@react-three/drei";
// import { PointLight } from "@react-three/drei";

import CanvasLoader from "../Loader";

const Guitar = () => {
  const guitar = useGLTF("./planet/scene.gltf");

  return (
    <primitive po object={guitar.scene}  scale={2.5} position-y={0.5} position-x={0} rotation-x={3} rotation-y={-2.5} rotation-z={1.5} />
  );
};

const GuitarCanvas = () => {
  return (
    <Canvas
      shadows
      frameloop='demand'
      dpr={[1, 2]}
      gl={{ preserveDrawingBuffer: true }}
      style={{ width: "50vw", height: "100vh" }} // This will make the canvas take up the full viewport height
      camera={{
        fov: 10,
        near: 0.1,
        far: 100,
        position: [22, 4, 6],
        
      }}
    >
      <Suspense fallback={<CanvasLoader />}>
        <OrbitControls
          autoRotate
          enableZoom={false}
          maxPolarAngle={Math.PI / 2}
          minPolarAngle={Math.PI / 2}
        />
              <ambientLight />
              <pointLight position={[10, 10, 10]} />
        {/* <PointLight position={[10, 10, 10]} /> */}
        <Guitar />

        <Preload all />
      </Suspense>
    </Canvas>
  );
};

export default GuitarCanvas;
