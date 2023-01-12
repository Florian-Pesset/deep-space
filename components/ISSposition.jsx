import { useEffect, useRef, useState } from "react";
import { TextureLoader } from "three/src/loaders/TextureLoader";
import axios from "axios";
import { Canvas, useLoader, useThree, useFrame } from "@react-three/fiber";
import { OrbitControls } from "@react-three/drei";
import * as THREE from "three";

const ISS = () => {
  const [position, setPosition] = useState({ x: 0, y: 0, z: 5 });

  const texture = useLoader(
    TextureLoader,
    "https://upload.wikimedia.org/wikipedia/commons/8/88/ISS_after_STS-118_%28computer_rendering_of_August_2006%29.png"
  );
  useEffect(() => {
    const interval = setInterval(async () => {
      await axios
        .get("http://api.open-notify.org/iss-now.json", {
          headers: {
            "Access-Control-Allow-Origin": "*",
          },
        })
        .then((res) => {
          const {
            data: {
              iss_position: { latitude, longitude },
            },
          } = res;

          setPosition({
            x: 5 * Math.cos(latitude) * Math.cos(longitude),
            y: 5 * Math.cos(latitude) * Math.sin(longitude),
            z: 5 * Math.sin(latitude),
          });
        })
        .catch((err) => console.error(err));
    }, 1000);

    return () => clearInterval(interval);
  }, []);

  return (
    <mesh
      scale={new THREE.Vector3(0.2, 1, 1)}
      position={new THREE.Vector3(position.x, position.y, position.z)}
    >
      <boxGeometry />
      <meshStandardMaterial map={texture} transparent={true} opacity={0.9} />
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
      <mesh scale={new THREE.Vector3(4, 4, 4)}>
        <ambientLight intensity={0.7} />
        <sphereGeometry />
        <meshStandardMaterial map={texture} />
        <OrbitControls autoRotate />
      </mesh>
    </>
  );
};

const Camera = (props) => {
  const ref = useRef();
  const set = useThree((state) => state.set);
  useEffect(() => void set({ camera: ref.current }), []);
  useFrame(() => ref.current.updateMatrixWorld());
  return <perspectiveCamera ref={ref} {...props} />;
};

const ISSposition = () => {
  return (
    <Canvas style={{ height: "800px" }}>
      <Camera position={[0, 0, 20]} />
      <Earth />
      <ISS />
    </Canvas>
  );
};

export default ISSposition;
