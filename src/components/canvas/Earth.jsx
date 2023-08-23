import React, { Suspense } from "react";
import { Canvas } from "@react-three/fiber";
import { OrbitControls, Preload, useGLTF } from "@react-three/drei";
// import { PointLight } from "@react-three/drei";

import CanvasLoader from "../Loader";

const Guitar = () => {
  const guitar = useGLTF("./planet/scene.gltf");

  return (
    <primitive object={guitar.scene} scale={2.5} position-y={0} rotation-x={2} rotation-y={0} rotation-z={2} />
  );
};

const EarthCanvas = () => {
  return (
    <Canvas
      shadows
      frameloop='demand'
      dpr={[1, 2]}
      gl={{ preserveDrawingBuffer: true }}
      camera={{
        fov: 45,
        near: 0.1,
        far: 100,
        position: [2  , 3, 6],
      }}
    >
      <Suspense fallback={<CanvasLoader />}>
        <OrbitControls
          autoRotate
          enableZoom={true}
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

export default EarthCanvas;
