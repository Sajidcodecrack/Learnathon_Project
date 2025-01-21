import React, { useRef, useEffect, useState } from "react";
import PropTypes from "prop-types";
import { Canvas, useFrame, useLoader } from "@react-three/fiber";
import { Environment } from "@react-three/drei";
import * as THREE from "three";
import { GLTFLoader } from "three/examples/jsm/loaders/GLTFLoader";
import { EffectComposer, Bloom, SSAO as Ssao, Vignette } from "@react-three/postprocessing";

const Model = ({ mouse }) => {
  const modelRef = useRef();

  useFrame(() => {
    if (modelRef.current) {
      modelRef.current.rotation.y = THREE.MathUtils.lerp(
        modelRef.current.rotation.y,
        mouse.x * -0.5,
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
      rotation={[0, 0, 0]}
      castShadow
      receiveShadow
    />
  );
};

Model.propTypes = {
  mouse: PropTypes.shape({
    x: PropTypes.number.isRequired,
  }).isRequired,
};

const Scene = () => {
  const [mouse, setMouse] = useState({ x: 0 });

  useEffect(() => {
    const handleMouseMove = (event) => {
      const { innerWidth } = window;
      const x = (event.clientX / innerWidth) * 2 - 1;
      setMouse({ x });
    };

    window.addEventListener("mousemove", handleMouseMove);
    return () => {
      window.removeEventListener("mousemove", handleMouseMove);
    };
  }, []);

  return (
    <div style={{ width: "100%", height: "100vh", margin: "0", padding: "0" }}>
      <Canvas
        shadows
        camera={{ position: [7, 1, -6], fov: 40 }}
        gl={{
          toneMapping: THREE.ACESFilmicToneMapping,
          outputEncoding: THREE.sRGBEncoding,
        }}
      >
        <ambientLight intensity={0.3} />
        <directionalLight
          intensity={1}
          position={[10, 10, 10]}
          castShadow
          shadow-mapSize={{ width: 2048, height: 2048 }}
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
          shadow-mapSize={{ width: 1024, height: 1024 }}
        />
        <Environment preset="sunset" background={false} />
        <Model mouse={mouse} />
        <EffectComposer>
          <Ssao samples={31} radius={0.2} intensity={20} luminanceInfluence={0.4} />
          <Bloom intensity={0.6} luminanceThreshold={0.2} luminanceSmoothing={0.15} />
          <Vignette eskil={false} offset={0.1} darkness={1.2} />
        </EffectComposer>
      </Canvas>
    </div>
  );
};

export default Scene;
