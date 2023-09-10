import { Suspense } from "react";
import { Canvas  } from "@react-three/fiber";
import { OrbitControls, Preload, useGLTF } from "@react-three/drei";

import CanvasLoader from "../Loader";

const Drums = () => {
  const guitar = useGLTF("./drums/scene.gltf");
  const isMobile = window.innerWidth <= 768;
  const scaleValue = isMobile ? 0.033 : 0.022;
  const positionY = isMobile ? -1.6 : 0.7;
  return (
    <primitive object={guitar.scene}  scale={scaleValue} position-y={positionY} position-x={0.3} position-z={0} rotation-x={0} rotation-y={1.5} rotation-z={0} />
  );
};

const DrumsCanvas  = () => {
  const isMobile = window.innerWidth <= 768;
  const widthValue = isMobile ? "100%" : "500px";
  const heightValue = isMobile ? "400px" : "900px";
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
        position: [2, 4, 9],
        
      }}
    >
      <Suspense fallback={<CanvasLoader  />}>
        <OrbitControls
          autoRotate={false}
          autoRotateSpeed={.4}
          rotateSpeed={0.3}
          enableZoom={false}
          minAzimuthAngle={-Math.PI / 4} // Limit horizontal rotation to -45 degrees
          maxAzimuthAngle={Math.PI / 4}           // maxPolarAngle={Math.PI / 2}
          minPolarAngle={Math.PI / 4}
          maxPolarAngle={Math.PI / 2}
          target={[0, 0, 0.5]}
        />
              {/* <ambientLight /> */}
              <pointLight position={[5, 5, 5]} />
              <pointLight position={[-1, 30, -20]} />
              <pointLight position={[-5, -30, -6]} />
        <Drums />

        <Preload all/>
      </Suspense>
    </Canvas>
  );
};

export default DrumsCanvas;
