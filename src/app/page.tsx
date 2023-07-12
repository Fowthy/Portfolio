'use client'

import {useEffect, useRef, useState} from 'react';
import { Canvas } from "@react-three/fiber";
import Floor from '@/components/floor';
import Box from '@/components/box';
import LightBulb from '@/components/lightbulb';
import React from 'react'
import { Mesh } from 'three'

export default function Home() {
  const meshRef = useRef<Mesh>(null);

  const [positionX, setPositionX] = useState(0);
  const [positionY, setPositionY] = useState(0);

  // useEffect(() => {
  //   const handleMouseMove = (event: any) => {
  //     setPositionX(event.clientX);
  //     setPositionY(event.clientY);
  //   };

  //   document.addEventListener('mousemove', handleMouseMove);

  //   return () => {
  //     document.removeEventListener('mousemove', handleMouseMove);
  //   };
  // }, []);

  // const backgroundStyle = {
  //   transform: `translate(${positionX * 0.1}px, ${positionY * 0.1}px)`,
  // };

  return (
    <div>
    <section className='section'>
      <h1>Aleksandar Svetoslavov</h1>
    <Canvas>
      <ambientLight />
      <LightBulb position={[-2, 4, -1]} />
      <Floor/>
      <Box ref={meshRef} color={"#FFFF00"}/>
    </Canvas>
    </section>
    </div>
  )
}
