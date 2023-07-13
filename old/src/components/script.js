import * as THREE from "three";
import React, { useEffect, useRef } from "react";

function ThreeCanvas() {
  const canvasRef = useRef(null);

  useEffect(() => {
    // Check if canvas exists
    if (!canvasRef.current) return;

    // Canvas
    const canvas = canvasRef.current;

    // Scene
    const scene = new THREE.Scene();

    // Objects
    const objectsDistance = 4;

    // Material
    const material = new THREE.MeshToonMaterial({ color: "#ff1200" });

    // Meshes
    const mesh1 = new THREE.Mesh(
      new THREE.SphereGeometry(1, 32, 32),
      material
    );
    const mesh2 = new THREE.Mesh(new THREE.ConeGeometry(1, 2, 32), material);
    const mesh3 = new THREE.Mesh(
      new THREE.TorusKnotGeometry(0.8, 0.35, 100, 16),
      material
    );

    // Positions
    mesh1.position.y = -objectsDistance * 0;
    mesh2.position.y = -objectsDistance * 1;
    mesh3.position.y = -objectsDistance * 2;
    mesh1.position.x = 2;
    mesh2.position.x = -2;
    mesh3.position.x = 2;

    const sectionMeshes = [mesh1, mesh2, mesh3];
    scene.add(mesh1, mesh2, mesh3);

    // ... add the rest of your code here ...

    // Renderer
    const renderer = new THREE.WebGLRenderer({
      canvas: canvas,
      alpha: true,
    });
    renderer.setSize(window.innerWidth, window.innerHeight);
    renderer.setPixelRatio(Math.min(window.devicePixelRatio, 2));

    // Animate
    const clock = new THREE.Clock();
    let previousTime = 0;

    const tick = () => {
      const elapsedTime = clock.getElapsedTime();
      const deltaTime = elapsedTime - previousTime;
      previousTime = elapsedTime;

      // Animate meshes
      for (const mesh of sectionMeshes) {
        mesh.rotation.x += deltaTime * 0.1;
        mesh.rotation.y += deltaTime * 0.12;
      }

      // ... add the rest of your code here ...

      // Call tick again on the next frame
      window.requestAnimationFrame(tick);
    };

    tick();

    return () => {
      // Clean up Three.js resources
      scene.dispose();
      renderer.dispose();
      material.dispose();
      mesh1.geometry.dispose();
      mesh2.geometry.dispose();
      mesh3.geometry.dispose();
    };
  }, []);

  return <canvas ref={canvasRef} className="webgl"></canvas>;
}

export default ThreeCanvas;