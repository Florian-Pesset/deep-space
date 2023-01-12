import { NextPage } from "next";
import styles from "../styles/Home.module.css";
import HomeView from "./HomeView";
import Layout from "../components/Layout";
import Head from "next/head";

const Home: NextPage = () => {
  return (
    <>
      <Head>
        <link rel="icon" href="/favicon.ico" />
      </Head>
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
