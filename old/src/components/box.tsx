import React, {  useRef } from 'react'
import { useFrame, useThree } from '@react-three/fiber'
import { TextureLoader } from "three";


function Box(props: any) {
    // This reference will give us direct access to the mesh
    const mesh = useRef<THREE.Mesh>(null);  
    // Get the current state of the mouse
    const { mouse } = useThree();
  
    // Rotate mesh every frame, this is outside of React without overhead
    useFrame(() => {
      if (mesh.current) {
        mesh.current.rotation.x = -(mouse.y * 2);
        mesh.current.rotation.y = mouse.x * 2;
      }
    });

    const texture = new TextureLoader().load("/textures/rock_boulder_dry_diff_4k.jpg");
  
    return (
      <mesh {...props} ref={mesh} position={[2,0,0]}>
        <sphereGeometry args={[2, 32, 32]}/>
        <meshBasicMaterial map={texture} />
      </mesh>
    );
}
export default Box;