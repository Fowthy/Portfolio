import React from "react";
import { TextureLoader } from "three";

function Floor(props: any) {
    const texture = new TextureLoader().load("/textures/coast_sand_03_diff_4k.jpg");
  return (
    <mesh {...props} recieveShadow position={[0,-3,0]} rotation={[5,0,2]}>
      <boxGeometry args={[15,15,0.2]}/>
      <meshBasicMaterial map={texture} />
    </mesh>
  );
}

export default Floor;
