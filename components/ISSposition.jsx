import { useEffect, useRef, useState } from "react";
import { TextureLoader } from "three/src/loaders/TextureLoader";
import axios from "axios";
import { Canvas, useLoader, useThree, useFrame } from "@react-three/fiber";
import { OrbitControls } from "@react-three/drei";
import * as THREE from "three";
import { Text } from "@chakra-ui/react";

const ISS = ({ setRealPosition }) => {
  const [position, setPosition] = useState({ x: 0, y: 0, z: 5 });

  const texture = useLoader(
    TextureLoader,
    "https://upload.wikimedia.org/wikipedia/commons/8/88/ISS_after_STS-118_%28computer_rendering_of_August_2006%29.png"
  );
  useEffect(() => {
    const interval = setInterval(async () => {
      const headers = {
        "Content-Type": "application/json",
      };
      const url = "https://api.wheretheiss.at/v1/satellites/25544";

      await axios
        .get(url, { headers })
        .then((res) => {
          const {
            data: { latitude, longitude, altitude },
          } = res;
          setRealPosition({
            latitude,
            longitude,
            altitude,
          });

          const radius = 40;
          const latRad = latitude * (Math.PI / 180);
          const lonRad = longitude * (Math.PI / 180);

          const x = radius * Math.cos(latRad) * Math.cos(lonRad);
          const y = radius * Math.cos(latRad) * Math.sin(lonRad);
          const z = radius * Math.sin(latRad);

          setPosition({ x, y, z });
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
      <mesh scale={new THREE.Vector3(31.8, 31.8, 31.8)}>
        <ambientLight intensity={0.7} />
        <sphereGeometry />
        <meshStandardMaterial map={texture} />
        <OrbitControls />
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
  const [realPosition, setRealPosition] = useState({});

  return (
    <>
      <Text color="secondary">{realPosition.longitude}</Text>
      <Text color="secondary">{realPosition.latitude}</Text>
      <Canvas style={{ height: "800px" }}>
        <Camera position={[0, 0, 90]} />
        <Earth />
        <ISS setRealPosition={setRealPosition} />
      </Canvas>
    </>
  );
};

export default ISSposition;
