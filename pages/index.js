import React from "react";
import { client } from '../lib/client';
import Link from "next/link";
import Head from "next/head";
import styles from '../styles/Home.module.scss';

const Home = ({ bannerData }) => {
  return (
    <>
    <Head>
        <title>Dalaket | Home</title>
        <link rel="icon" href="/logo.png" />
    </Head>
    <div className={styles.home}>
      <video autoPlay muted loop className={styles.video}>         
        <source src='/1.mp4' type='video/mp4'/>     
      </video>

      <div className={styles.overlay}>
          <div className={styles.pcont}>
          <Link href='/shop'>
            <a><p>{bannerData[0].theme}</p></a>
          </Link>
          <Link href='/shop/malumanay'> 
            <a><p className={styles.sub}>{bannerData[0].featured}</p></a>
          </Link>
          </div>
      </div> 
      
    </div>
    </>
  );

}

export const getServerSideProps = async () => {
  const bannerQuery = '*[_type == "banner"]';
  const bannerData = await client.fetch(bannerQuery);

  return {
    props: { bannerData }
  }
}

export default Home;
