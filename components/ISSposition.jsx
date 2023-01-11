import { useEffect, useRef, Suspense, useState } from "react";
import { RepeatWrapping } from "three";
import { TextureLoader } from "three/src/loaders/TextureLoader";
import axios from "axios";
import { Canvas, useLoader } from "@react-three/fiber";
import { Plane, Box, OrbitControls, useTexture } from "@react-three/drei";
import * as THREE from "three";

const ISS = () => {
  const [position, setPosition] = useState({ x: 0, y: 0, z: 5 });
  const texture = useLoader(
    TextureLoader,
    "https://upload.wikimedia.org/wikipedia/commons/8/88/ISS_after_STS-118_%28computer_rendering_of_August_2006%29.png"
  );
  useEffect(() => {
    const interval = setInterval(async () => {
      const response = await axios.get(
        "http://api.open-notify.org/iss-now.json"
      );

      const {
        data: {
          iss_position: { latitude, longitude },
        },
      } = response;

      setPosition({
        x: (longitude / 180) * 100,
        y: (latitude / 90) * 100,
        z: 5,
      });
    }, 1000);
    console;
    return () => clearInterval(interval);
  }, []);

  return (
    <mesh
      scale={new THREE.Vector3(1, 1, 1)}
      position={new THREE.Vector3(position.x, position.y, position.z)}
    >
      <boxGeometry />
      <meshStandardMaterial map={texture} />
    </mesh>
  );
};

const Earth = () => {
  const texture = useLoader(
    TextureLoader,
    "https://upload.wikimedia.org/wikipedia/commons/7/74/Mercator-projection.jpg"
  );

  return (
    <>
      <mesh scale={new THREE.Vector3(40, 40, 40)}>
        <ambientLight intensity={0.7} />
        <sphereGeometry />
        <meshStandardMaterial map={texture} />
        <OrbitControls />
      </mesh>
    </>
  );
};

const ISSposition = () => {
  return (
    <Canvas style={{ height: "800px" }}>
      {/* <Suspense fallback={null}> */}
      <Earth />
      <ISS />

      {/* </Suspense> */}
    </Canvas>
  );
};

export default ISSposition;
