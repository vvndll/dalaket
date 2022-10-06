import React from 'react';
import Image from "next/image";
import Head from "next/head";
import styles from '../../styles/About.module.scss';

const About = () => {
  return (
    <>
    <Head>
        <title>Dalaket | About</title>
        <link rel="icon" href="/logo.ico" />
    </Head>
    <div className={styles.about}>

        <div className={styles.heading}>
            <p>Carefully &amp; passionately handcrafted by our artisans. Your personal space will remind you of the wonders of the Philippines.</p>
        </div>

        <div className={styles.journal}>
            <Image src='/journal.jpg' alt='journal' width={1920} height={1080} />
        </div>

        <div className={styles.grid}>
            <div className={styles.para}>
                <h2>About</h2>
                <p>Lorem ipsum dolor sit amet consectetur adipiscing elit, urna consequat felis vehicula class ultricies mollis dictumst, aenean non a in donec nulla. Lorem ipsum dolor sit amet consectetur adipiscing elit, urna consequat felis vehicula class ultricies mollis dictumst, aenean non a in donec nulla.</p>
            </div>
            <div className={styles.image}>
                <Image src='/about.jpg' alt='about' width={640} height={960} />
            </div>
        </div>

        <div className={styles.grid}>
            <div className={styles.image}>
                <Image src='/founder.jpg' alt='about' width={640} height={960} />
            </div>
            <div className={styles.para}>
                <h2>Artisan</h2>
                <p>Lorem ipsum dolor sit amet consectetur adipiscing elit, urna consequat felis vehicula class ultricies mollis dictumst, aenean non a in donec nulla. Lorem ipsum dolor sit amet consectetur adipiscing elit, urna consequat felis vehicula class ultricies mollis dictumst, aenean non a in donec nulla.</p>
            </div>
        </div>

    </div>
    </>
  );
}

export default About;