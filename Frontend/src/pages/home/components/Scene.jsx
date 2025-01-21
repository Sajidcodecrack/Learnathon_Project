import React, { useRef, useEffect, useState } from "react";
import { Canvas, useFrame, useLoader } from "@react-three/fiber";
import { Environment } from "@react-three/drei";
import * as THREE from "three"; // Explicitly import THREE
import { GLTFLoader } from "three/examples/jsm/loaders/GLTFLoader";
import { EffectComposer, Bloom, SSAO, Vignette } from "@react-three/postprocessing";

const Model = ({ mouse }) => {
  const modelRef = useRef();

  useFrame(() => {
    if (modelRef.current) {
      // Smoothly interpolate the model's rotation based on mouse movement
      modelRef.current.rotation.y = THREE.MathUtils.lerp(
        modelRef.current.rotation.y,
        mouse.x * -0.5, // Adjust the factor for sensitivity
        0.1
      );
    }
  });

  const gltf = useLoader(GLTFLoader, "/basket.glb");

  return (
    <primitive
      ref={modelRef}
      object={gltf.scene}
      position={[0, -0.5, 0]}
      rotation={[0, 0, 0]} // Initial rotation set to look at the center
      castShadow
      receiveShadow
    />
  );
};

const Scene = () => {
  const [mouse, setMouse] = useState({ x: 0 });

  const containerStyle = {
    width: "100%",
    height: "100vh",
    margin: "0",
    padding: "0",
    overflow: "hidden",
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
  };

  useEffect(() => {
    const handleMouseMove = (event) => {
      const { innerWidth } = window;
      // Normalize mouse X position to the range [-1, 1]
      const x = (event.clientX / innerWidth) * 2 - 1;
      setMouse({ x });
    };

    window.addEventListener("mousemove", handleMouseMove);
    return () => {
      window.removeEventListener("mousemove", handleMouseMove);
    };
  }, []);

  return (
    <div style={containerStyle}>
      <Canvas
        shadows // Enable shadows globally
        camera={{ position: [7, 1, -6], fov: 40 }}
        gl={{
          toneMapping: THREE.ACESFilmicToneMapping,
          outputEncoding: THREE.sRGBEncoding,
        }}
      >
        {/* Lighting */}
        <ambientLight intensity={0.3} />
        <directionalLight
          intensity={1}
          position={[10, 10, 10]}
          castShadow
          shadow-mapSize-width={2048} // Higher resolution for sharper shadows
          shadow-mapSize-height={2048}
          shadow-camera-near={0.1}
          shadow-camera-far={50}
          shadow-camera-left={-10}
          shadow-camera-right={10}
          shadow-camera-top={10}
          shadow-camera-bottom={-10}
        />
        <spotLight
          intensity={0.5}
          position={[-5, 15, 10]}
          angle={0.3}
          penumbra={1}
          castShadow
          shadow-mapSize-width={1024}
          shadow-mapSize-height={1024}
        />

        {/* Environment */}
        <Environment preset="sunset" background={false} /> {/* Hide HDRI background */}

        {/* 3D Model */}
        <Model mouse={mouse} />

        {/* Post-Processing Effects */}
        <EffectComposer>
          <SSAO samples={31} radius={0.2} intensity={20} luminanceInfluence={0.4} />
          <Bloom intensity={0.6} luminanceThreshold={0.2} luminanceSmoothing={0.15} />
          <Vignette eskil={false} offset={0.1} darkness={1.2} />
        </EffectComposer>
      </Canvas>
    </div>
  );
};

export default Scene;
