import Head from "next/head";
import Image from "next/image";
import { useState } from "react";
import Banner from "../components/banner";
import Card from "../components/card";
import styles from "../styles/Home.module.css";

export default function Home() {
  const [bannerBtnText, setBannerBtnText] = useState("View stores nearby");
  const handleOnBannerBtnClick = () => {
    setBannerBtnText("Loading..");
  };
  return (
    <div className={styles.container}>
      <Head>
        <title>Coffee Connoiseseur</title>
        <meta name="description" content="Generated by create next app" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main className={styles.main}>
        <Banner
          buttonText={bannerBtnText}
          handleOnClick={handleOnBannerBtnClick}
        />
        <Image src="/static/hero-image.png" alt="Hero img" width={700} height={400} className={styles.heroImage} priority />
        <Card name={`DarkHorse Coffee`} href={`/coffee-store/darkhorse-coffee`} imageUrl={`/static/hero-image`} />
      </main>
    </div>
  );
}
