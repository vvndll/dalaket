import React from 'react';
import { client } from '../../lib/client';
import Head from 'next/head';
import { ProductCard } from '../../components';
import styles from '../../styles/Shop.module.scss';


const Shop = ({ products }) => {
  return (
    <>
    <Head>
        <title>Dalaket | Shop</title>
        <link rel="icon" href="/logo.ico" />
    </Head>
    <div className={styles.shop}>
        <div className={styles.label}>Shop All</div>

        <div className={styles.grid}>
          {products?.map((product) => {
            return (
              <ProductCard key={product._id} product={product} />
            );
          })}
        </div>
    </div>
    </>
  );
}

export const getServerSideProps = async () => {
  const query = '*[_type == "product"]';
  const products = await client.fetch(query);
  return {
    props: { products }
  }
}


export default Shop;