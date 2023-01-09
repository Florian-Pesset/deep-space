import type { NextPage } from "next";
import styles from "../styles/Home.module.css";
import HomeView from "./HomeView";
import Layout from "../components/Layout";

const Home: NextPage = () => {
  return (
    <>
      <Layout
        name="home"
        component={
          <div className={styles.container}>
            <main className={styles.main}>
              <HomeView />
            </main>
          </div>
        }
      />
    </>
  );
};

export default Home;
