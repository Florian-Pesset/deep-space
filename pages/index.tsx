import type { NextPage } from "next";
import styles from "../styles/Home.module.css";
import HomeView from "./HomeView";
import Layout from "../components/Layout";
import Head from "next/head";

export interface PictureOfDayProps {
  copyright: string;
  date: string;
  explanation: string;
  hdurl: string;
  media_type: string;
  service_version: string;
  title: string;
  url: string;
}

const Home: NextPage<{ pictureOfDay: PictureOfDayProps }> = ({
  pictureOfDay,
}) => {
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
              <HomeView pictureOfDay={pictureOfDay} />
            </main>
          </div>
        }
      />
    </>
  );
};

export async function getServerSideProps() {
  const apiKey = process.env.REACT_APP_API_KEY_APOD;
  const res = await fetch(
    `https://api.nasa.gov/planetary/apod?api_key=${apiKey}`
  );
  const pictureOfDay = await res.json();

  return {
    props: {
      pictureOfDay,
    },
  };
}

export default Home;
