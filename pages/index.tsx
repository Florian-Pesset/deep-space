import type { NextPage } from "next";
import { Box } from "@chakra-ui/react";
import styles from "../styles/Home.module.css";
import HomeView from "./HomeView";
import Navigation from "../components/Navigation";

const Home: NextPage = () => {
  const devices = (device: string) => {
    return `url('../assets/home/background-home-${device}.jpg')`;
  };

  return (
    <Box
      bgImage={{
        base: devices("mobile"),
        md: devices("tablet"),
        xl: devices("desktop"),
      }}
      backgroundPosition="center"
      backgroundRepeat="no-repeat"
      backgroundSize="cover"
    >
      <Navigation />
      <div className={styles.container}>
        <main className={styles.main}>
          <HomeView />
        </main>
      </div>
    </Box>
  );
};

export default Home;
