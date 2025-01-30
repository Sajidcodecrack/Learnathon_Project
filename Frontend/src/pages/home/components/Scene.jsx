import React, { useRef, useEffect, useState } from "react";
import PropTypes from "prop-types";
import { Canvas, useFrame, useLoader } from "@react-three/fiber";
import { Environment } from "@react-three/drei";
import * as THREE from "three";
import { GLTFLoader } from "three/examples/jsm/loaders/GLTFLoader";
import { EffectComposer, Bloom, SSAO as Ssao, Vignette } from "@react-three/postprocessing";

// Constants for light and shadow settings
const LIGHT_SETTINGS = {
  ambient: { intensity: 0.3 },
  directional: {
    intensity: 1,
    position: [10, 10, 10],
    shadow: {
      mapSize: { width: 2048, height: 2048 },
      camera: { near: 0.1, far: 50, left: -10, right: 10, top: 10, bottom: -10 },
    },
  },
  spot: {
    intensity: 0.5,
    position: [-5, 15, 10],
    angle: 0.3,
    penumbra: 1,
    shadow: { mapSize: { width: 1024, height: 1024 } },
  },
};

// Constants for post-processing effects
const POST_PROCESSING_SETTINGS = {
  ssao: { samples: 31, radius: 0.2, intensity: 20, luminanceInfluence: 0.4 },
  bloom: { intensity: 0.6, luminanceThreshold: 0.2, luminanceSmoothing: 0.15 },
  vignette: { eskil: false, offset: 0.1, darkness: 1.2 },
};

// Custom hook for mouse movement
const useMouseMovement = () => {
  const [mouse, setMouse] = useState({ x: 0 });

  useEffect(() => {
    const handleMouseMove = (event) => {
      const { innerWidth } = window;
      const x = (event.clientX / innerWidth) * 2 - 1;
      setMouse({ x });
    };

    window.addEventListener("mousemove", handleMouseMove);
    return () => window.removeEventListener("mousemove", handleMouseMove);
  }, []);

  return mouse;
};

// Custom hook for screen size
const useScreenSize = () => {
  const [screenSize, setScreenSize] = useState({
    width: window.innerWidth,
    height: window.innerHeight,
  });

  useEffect(() => {
    const handleResize = () => {
      setScreenSize({
        width: window.innerWidth,
        height: window.innerHeight,
      });
    };

    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  return screenSize;
};
const Model = ({ mouse, scale, yPosition }) => {
  const modelRef = useRef();
  const gltf = useLoader(GLTFLoader, "/basket.glb");

  useFrame(() => {
    if (modelRef.current) {
      modelRef.current.rotation.y = THREE.MathUtils.lerp(
        modelRef.current.rotation.y,
        mouse.x * -0.5,
        0.1
      );
    }
  });

  return (
    <primitive
      ref={modelRef}
      object={gltf.scene}
      position={[0, yPosition, 0]} // Adjust Y position dynamically
      rotation={[0, 0, 0]}
      scale={scale}
      castShadow
      receiveShadow
    />
  );
};

Model.propTypes = {
  mouse: PropTypes.shape({
    x: PropTypes.number.isRequired,
  }).isRequired,
  scale: PropTypes.number.isRequired,
  yPosition: PropTypes.number.isRequired,
};

// Scene component
const Scene = () => {
  const mouse = useMouseMovement();
  const { width: screenWidth } = useScreenSize();

  let cameraPosition, fov, modelScale, modelY;

  if (screenWidth < 1024) {
    // Small screens
    cameraPosition = [8, 1.5, -1];
    fov = 50;
    modelScale = 0.7;
    modelY = 0.3; // Adjust model position for small screens
  } else if (screenWidth >= 1024 && screenWidth < 1450) {
    // Medium screens
    cameraPosition = [9, 1.5, -1];
    fov = 50;
    modelScale = 1;
    modelY = -0.5;
  } else {
    // Large screens
    cameraPosition = [9, 1.5, -1];
    fov = 50;
    modelScale = 1.3;
    modelY = -0.1;
  }

  return (
    <div style={{ width: "100%", height: "100vh", margin: "0", padding: "1" }}>
      <Canvas
        shadows
        camera={{ position: cameraPosition, fov }}
        gl={{
          toneMapping: THREE.ACESFilmicToneMapping,
          outputEncoding: THREE.sRGBEncoding,
        }}
      >
        <ambientLight intensity={LIGHT_SETTINGS.ambient.intensity} />
        <directionalLight
          intensity={LIGHT_SETTINGS.directional.intensity}
          position={LIGHT_SETTINGS.directional.position}
          castShadow
          shadow-mapSize={LIGHT_SETTINGS.directional.shadow.mapSize}
          shadow-camera-near={LIGHT_SETTINGS.directional.shadow.camera.near}
          shadow-camera-far={LIGHT_SETTINGS.directional.shadow.camera.far}
          shadow-camera-left={LIGHT_SETTINGS.directional.shadow.camera.left}
          shadow-camera-right={LIGHT_SETTINGS.directional.shadow.camera.right}
          shadow-camera-top={LIGHT_SETTINGS.directional.shadow.camera.top}
          shadow-camera-bottom={LIGHT_SETTINGS.directional.shadow.camera.bottom}
        />
        <spotLight
          intensity={LIGHT_SETTINGS.spot.intensity}
          position={LIGHT_SETTINGS.spot.position}
          angle={LIGHT_SETTINGS.spot.angle}
          penumbra={LIGHT_SETTINGS.spot.penumbra}
          castShadow
          shadow-mapSize={LIGHT_SETTINGS.spot.shadow.mapSize}
        />
        <Environment preset="sunset" background={false} />
        <Model mouse={mouse} scale={modelScale} yPosition={modelY} />
        <EffectComposer>
          <Ssao {...POST_PROCESSING_SETTINGS.ssao} />
          <Bloom {...POST_PROCESSING_SETTINGS.bloom} />
          <Vignette {...POST_PROCESSING_SETTINGS.vignette} />
        </EffectComposer>
      </Canvas>
    </div>
  );
};


export default Scene;