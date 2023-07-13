'use client'
import { useEffect, useRef, useState } from "react";
import { OrbitControls } from 'three/examples/jsm/controls/OrbitControls';
import { FontLoader } from 'three/examples/jsm/loaders/FontLoader.js';
import { TextGeometry } from 'three/examples/jsm/geometries/TextGeometry.js';
import { PerspectiveCamera, Scene, WebGLRenderer, BoxGeometry, MeshBasicMaterial, Mesh, Vector3, Points, PointsMaterial, BufferGeometry, Float32BufferAttribute, PointLight, MeshPhongMaterial, SphereGeometry, TextureLoader, LineBasicMaterial, Line, PlaneGeometry, DoubleSide, Group, CanvasTexture, SpriteMaterial, Sprite, Euler, MathUtils, LoadingManager, Event, Object3D } from "three";

const Page = () => {
    const mount = useRef<HTMLDivElement | null>(null); 
     const [isLoading, setIsLoading] = useState(true);
     const [loadingProgress, setLoadingProgress] = useState(0);

    useEffect(() => {
      if(!mount.current) return;
        window.scrollTo(0, 0);

        const manager = new LoadingManager();

        manager.onProgress = (url, itemsLoaded, itemsTotal) => {
          setLoadingProgress((itemsLoaded / itemsTotal) * 100);
        };
        const scene = new Scene();
        const textureLoaderr = new TextureLoader(manager);
        const bgTexture = textureLoaderr.load("/images/background2.jpg");

        scene.background = bgTexture;
        const camera = new PerspectiveCamera(75, window.innerWidth / window.innerHeight, 0.1, 1000);
        camera.position.z = 5;

        const renderer = new WebGLRenderer({ antialias: true });
        renderer.setSize(window.innerWidth, window.innerHeight);

        mount.current.appendChild(renderer.domElement);

        // const geometry = new BoxGeometry(1, 1, 1);
        // const material = new MeshPhongMaterial({ color: "#433F81" });
        // const cube = new Mesh(geometry, material);
        // cube.position.x = 2.5;  // Position the cube slightly to the right
        // scene.add(cube);
        // const titleCanvas = document.createElement('canvas');
        
        // const titleContent = titleCanvas.getContext('2d');
        
        // if (titleContent) {

        //   titleContent.font = '60px Arial';
        //     // context.fillRect(0, 0, canvas.width, canvas.height);
        //     titleContent.fillStyle = "white"
        //     titleContent.fillText('Aleksandar', 0, 140);
        // }

        //     const texture3 = new CanvasTexture(titleCanvas);

        //     // Create a sprite material using the texture
        //     const spriteMaterial3 = new SpriteMaterial({ map: texture3 });
  
        //     // Create a sprite using the material
        //     const sprite3 = new Sprite(spriteMaterial3);
  
        //     // Scale and position the sprite
        //     sprite3.scale.set(1, 0.5, 2);
        //     sprite3.position.set(0, 0, 2);
        //     scene.add(sprite3);
         // Load the font
        const fontLoader = new FontLoader(manager);
        let textMesh: Object3D<Event>;
        fontLoader.load('/arialblack.json', (font: any) => {
          // Create geometry
          const textGeometry = new TextGeometry('Aleksandar', {
            font: font,
            size: 1,
            height: 0.2,
            curveSegments: 12,
            bevelEnabled: true,
            bevelThickness: 0.02,
            bevelSize: 0.05,
            bevelSegments: 5
          });
            // Adjust geometry center
            textGeometry.computeBoundingBox();
            textGeometry.center();

          const textMaterial = new MeshPhongMaterial({ color: 0xFFFFFF });
          textMesh = new Mesh(textGeometry, textMaterial);
          textMesh.position.x = 0;
          scene.add(textMesh);
        });



        // // Second cube
        // const cube2 = new Mesh(geometry, material);
        // cube2.position.y = -4;  // Position the second cube below the first cube
        // scene.add(cube2);

        const textureLoader = new TextureLoader(manager);
        const earthTexture = textureLoader.load('/textures/earthmap.jpg');
        const earthGeometry = new SphereGeometry(2.5, 32, 32);
        const earthMaterial = new MeshPhongMaterial({ map: earthTexture });
        const earth = new Mesh(earthGeometry, earthMaterial);
        earth.position.y = -9;
        earth.position.x = 2.5;
        // earth.rotation.x = 1.5;
        // earth.rotation.y = 4;
        scene.add(earth);
        
        const textCanvas = document.createElement('canvas');
        textCanvas.width = 2300;
        textCanvas.height = 600;
        
        const textContext = textCanvas.getContext('2d');
        
        if (textContext) {

            textContext.font = '120px Arial';
            // context.fillRect(0, 0, canvas.width, canvas.height);
            textContext.fillStyle = "white"
            textContext.fillText('I was born in Vidin, Bulgaria', 0, 240);
            textContext.fillText('And I live in Eindhoven, the Netherlands', 0, 340);
            }

            const texture2 = new CanvasTexture(textCanvas);

            // Create a sprite material using the texture
            const spriteMaterial2 = new SpriteMaterial({ map: texture2 });
  
            // Create a sprite using the material
            const sprite2 = new Sprite(spriteMaterial2);
  
            // Scale and position the sprite
            sprite2.scale.set(1.5, 0.5, 2);
            sprite2.position.set(-1, -1, 3);
            sprite2.position.y = -8;
            scene.add(sprite2);
  
        // Convert geographic coordinates to 3D coordinates
        const lat = 42.7;
        const lon = 23.3;
        const radius = 2.5; // Radius of your earth sphere
        const phi = (90 - lat) * (Math.PI / 180);
        const theta = (lon + 180) * (Math.PI / 180);
        const x = -(radius * Math.sin(phi) * Math.cos(theta));
        const z = radius * Math.sin(phi) * Math.sin(theta);
        const y = radius * Math.cos(phi);

        // Create a marker
        const markerGeometry = new SphereGeometry(0.05, 32, 32);
        const markerMaterial = new MeshPhongMaterial({ color: 0xff0000 });
        const marker = new Mesh(markerGeometry, markerMaterial);
        marker.position.set(x, y, z);
        earth.add(marker); // Add the marker as a child of the earth

        const latNetherlands = 52.37;
        const lonNetherlands = 4.90;
        const radiusNetherlands = 2.5; // Radius of your earth sphere
        const phiNetherlands = (90 - latNetherlands) * (Math.PI / 180);
        const thetaNetherlands = (lonNetherlands + 180) * (Math.PI / 180);
        const xNetherlands = -(radiusNetherlands * Math.sin(phiNetherlands) * Math.cos(thetaNetherlands));
        const zNetherlands = radiusNetherlands * Math.sin(phiNetherlands) * Math.sin(thetaNetherlands);
        const yNetherlands = radiusNetherlands * Math.cos(phiNetherlands);

        // Create a marker for the Netherlands
        const markerGeometryNetherlands = new SphereGeometry(0.05, 32, 32);
        const markerMaterialNetherlands = new MeshPhongMaterial({ color: 0x0000ff }); // Different color for the new marker
        const markerNetherlands = new Mesh(markerGeometryNetherlands, markerMaterialNetherlands);
        markerNetherlands.position.set(xNetherlands, yNetherlands, zNetherlands);
        earth.add(markerNetherlands); // Add the marker as a child of the earth



        // Create a canvas and draw text on it
        const canvas = document.createElement('canvas');
        const context = canvas.getContext('2d');
        if (context) {
          context.font = '60px Arial';
          // context.fillRect(0, 0, canvas.width, canvas.height);
          context.fillStyle = "red"
          context.fillText('Bulgaria', 0, 50);
        }

          // Create a texture from the canvas
          const texture = new CanvasTexture(canvas);

          // Create a sprite material using the texture
          const spriteMaterial = new SpriteMaterial({ map: texture });

          // Create a sprite using the material
          const sprite = new Sprite(spriteMaterial);

          // Scale and position the sprite
          sprite.scale.set(0.5, 0.25, 1);
          sprite.position.set(x, y, z);
          sprite.position.y = 1.9;

          // Add the sprite to the scene
          earth.add(sprite);


          // Create a canvas and draw text on it
          const canvasNetherlands = document.createElement('canvas');
          const contextNetherlands = canvasNetherlands.getContext('2d');
          if (contextNetherlands) {
            contextNetherlands.font = '60px Arial';
            contextNetherlands.fillStyle = "blue"; // Different color for the new text
            contextNetherlands.fillText('Amsterdam', 0, 50);
          }

          // Create a texture from the canvas
          const textureNetherlands = new CanvasTexture(canvasNetherlands);

          // Create a sprite material using the texture
          const spriteMaterialNetherlands = new SpriteMaterial({ map: textureNetherlands });

          // Create a sprite using the material
          const spriteNetherlands = new Sprite(spriteMaterialNetherlands);

          // Scale and position the sprite
          spriteNetherlands.scale.set(0.5, 0.25, 1);
          spriteNetherlands.position.set(xNetherlands, yNetherlands, zNetherlands);
          spriteNetherlands.position.y = 2.1;

          // Add the sprite to the scene
          earth.add(spriteNetherlands);

        const particleGroup = new Group();
        // Create a material for the particles
        const particleMaterial = new SpriteMaterial({ color: 0xffffff });

        for (let i = 0; i < 1000; i++) {
          // Create a sprite for each particle
          const particle = new Sprite(particleMaterial);

          // Set the particle's position
          particle.position.set(Math.random() * 10 - 5, Math.random() * 10 - 5, Math.random() * 10 - 5);

          // Set the particle's scale to control its size
          particle.scale.set(0.01, 0.01, 0.1); // Width of 0.1 units, height of 0.2 units

          // Add the particle to the scene
          particleGroup.add(particle);
        }
        particleGroup.scale.set(4.5, 6.5, 0);
        scene.add(particleGroup)

        const light = new PointLight(0xffffff, 1, 1000);
        light.position.set(-1, 0, 4);
        scene.add(light);
        // Store the initial rotation
        const initialRotation = new Euler().copy(earth.rotation);

        // Determine the target rotation
        const targetRotation = new Euler(0.3, -2.5, 0); // Replace this with the rotation that makes the markers visible

        // Determine the scroll threshold
        const scrollThreshold = document.body.scrollHeight / 3; // Replace this with the scroll position at which you want the rotation to change
        
        setIsLoading(false);
        let isMouseDown = false;
        const animate = () => {
          requestAnimationFrame(animate);
            // cube2.rotation.x += 0.01;
            //  earth.rotation.y += 0.01;
            const lerpFactor = 0.05; // Adjust this value to change the speed of the rotation
            const scrollPosition = window.scrollY;

            if(scrollPosition > scrollThreshold && !isMouseDown) {
            earth.rotation.x = MathUtils.lerp(earth.rotation.x, targetRotation.x, lerpFactor);
            earth.rotation.y = MathUtils.lerp(earth.rotation.y, targetRotation.y, lerpFactor);
            earth.rotation.z = MathUtils.lerp(earth.rotation.z, targetRotation.z, lerpFactor);
            }
            //  marker.rotation.y += 0.01;
            //  sprite.rotation.y += 0.01;
            renderer.render(scene, camera);
        };

        animate();
        const lerpFactor = 0.1; // Adjust this value to change the speed of the rotation
        const handleScroll = () => {
          const scrollPosition = window.scrollY;
          if(textMesh)
          textMesh.position.y = scrollPosition * 0.01;
          // cube2.position.y = -4 + scrollPosition * 0.01;  // Move the second cube
          earth.position.y = -9 + scrollPosition * 0.01;  // Move the second cube
          sprite2.position.y = -8 + scrollPosition * 0.01;  // Move the second cube
          // group.position.y = -5 + scrollPosition * 0.01;  // Move the second cube
          particleGroup.position.y = scrollPosition * 0.015;
          // light.position.y = scrollPosition * 0.01;  // Move the light
          // if(scrollPosition > scrollThreshold) {

          // const scrollRatio = Math.min(Math.max(scrollPosition / scrollThreshold, 0), 1);

          // // Interpolate the Earth's rotation between the initial and target rotation based on the scroll ratio
          // earth.rotation.x = MathUtils.lerp(earth.rotation.x, targetRotation.x, scrollRatio * lerpFactor);
          // earth.rotation.y = MathUtils.lerp(earth.rotation.y, targetRotation.y, scrollRatio * lerpFactor);
          // earth.rotation.z = MathUtils.lerp(earth.rotation.z, targetRotation.z, scrollRatio * lerpFactor);
          // }
      };
      const isMobile = /Mobi|Android/i.test(navigator.userAgent);
      if (isMobile) {
        // Adjust properties for mobile
        // textMesh.scale.set(0.5, 0.5, 0.5);
        earth.scale.set(0.5, 0.5, 0.5);
        earth.position.x = 0;
      } else {
        // Adjust properties for desktop
        // textMesh.scale.set(1, 1, 1);
        earth.scale.set(1, 1, 1);
      }
      const handleMouseDown = () => {
        isMouseDown = true;
      };
      
      const handleMouseUp = () => {
        isMouseDown = false;
      };
      
      const handleMouseMove = (event: any) => {
        if (!isMouseDown) return;
        const { clientX, clientY } = event;
        const width = window.innerWidth;
        const height = window.innerHeight;

        const mouseX = clientX  - width / 2;
        const mouseY = clientY - height / 2;
         // Target rotation based on mouse movement
        const mouseRotation = new Euler(
          -(mouseY / (height / 2)) * Math.PI * 0.01,
          -(mouseX / (width / 2)) * Math.PI * 0.01,
          0
        );
        const mouseLerpFactor = 0.05;
      
        if(textMesh) {
          // Rotation is zero when mouse is at the center of the screen
          textMesh.rotation.y = -(mouseX / (width / 2)) * Math.PI * 0.01;
          textMesh.rotation.x = (mouseY / (height / 2)) * Math.PI * 0.1;
        }
       // Interpolate between the current rotation and the target rotation based on mouse movement
        earth.rotation.x = MathUtils.lerp(earth.rotation.x, mouseRotation.x, mouseLerpFactor);
        earth.rotation.y = MathUtils.lerp(earth.rotation.y, mouseRotation.y, mouseLerpFactor);
      }
      const handleResize = () => {
        // Update camera aspect ratio
        camera.aspect = window.innerWidth / window.innerHeight;
        camera.updateProjectionMatrix();
      
        // Update renderer size
        renderer.setSize(window.innerWidth, window.innerHeight);
      }
      window.addEventListener("resize", handleResize);
    window.addEventListener("scroll", handleScroll);
    window.addEventListener("mousemove", handleMouseMove);
    window.addEventListener('mousedown', handleMouseDown);
window.addEventListener('mouseup', handleMouseUp);

    
    return () => {
      window.removeEventListener("scroll", handleScroll);
      window.removeEventListener("mousemove", handleMouseMove);
      window.removeEventListener("resize", handleResize);
    };
}, []);

return (
    <div className="wrapper">
      {loadingProgress < 100 && <p style={{'color':'black'}}>Loading: {loadingProgress.toFixed(0)}%</p>}
        <div className="wrapper-child" ref={mount} style={{ position: "fixed", top: 0, left: 0, width: "100%", height: "100%" }} />
        <div className='wpr' style={{ height: "200vh" }} />
    </div>
);
};

export default Page;