import { Suspense } from "react";
import { Canvas  } from "@react-three/fiber";
import { OrbitControls, Preload, useGLTF } from "@react-three/drei";

import CanvasLoader from "../Loader";

const Guitar = () => {
  const guitar = useGLTF("./guitar5/scene.gltf");
  const isMobile = window.innerWidth <= 768;
  const scaleValue = isMobile ? 0.5 : 0.4;
  const positionY = isMobile ? 0 : 0;

  return (
    <primitive object={guitar.scene}  scale={scaleValue} position-y={positionY} position-x={0} position-z={1} rotation-x={0} rotation-y={1} rotation-z={1.5} />
  );
};

const GuitarCanvas = () => {
  const isMobile = window.innerWidth <= 768;
  const widthValue = isMobile ? "100%" : "500px"; 
  const heightValue = isMobile ? "600px" : "800px";



  return (
    <Canvas
      shadows
      frameloop='demand'
      dpr={[1, 2]}
      gl={{ preserveDrawingBuffer: true }}
      style={{ width: widthValue, height: heightValue }} 
      camera={{
        fov: 50,
        near: 0.1,
        far: 100,
        position: [2, 4, 6],
        
      }}
    >
      <Suspense fallback={<CanvasLoader  />}>
        <OrbitControls
          autoRotate={true}
          autoRotateSpeed={.8}
          rotateSpeed={0.5}
          enableZoom={false}
          enablePan={false}
          // maxAzimuthAngle={Math.PI / 2}          
          // minAzimuthAngle={Math.PI / 2}          
          maxPolarAngle={Math.PI / 2}
          minPolarAngle={Math.PI / 2}
          target={[-0.3, 0, 1.5]}
        />
              {/* <ambientLight /> */}
              <pointLight position={[-10, 1, 15]} />
        <Guitar />

        <Preload all/>
      </Suspense>
    </Canvas>
  );
};

export default GuitarCanvas;
