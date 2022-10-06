import React from 'react';
import Head from 'next/head';
import { client, urlFor } from '../../../lib/client';
import { ProductCard } from '../../../components';
import { useStateContext } from '../../../context/StateContext';
import styles from '../../../styles/Product.module.scss';

const Product = ({ product, products }) => {
    const { qty, incQty, decQty, onAdd, setToggleCart } = useStateContext();

    const handleBuyNow = () => {
      onAdd(product, qty);
  
      setToggleCart(true);
    }

  return (
    <>
    <Head>
        <title>Dalaket | Product Name</title>
    </Head>
    <div className={styles.product}>

        <div className={styles.grid}>
            <div className={styles.image}>
                <img src={urlFor(product.image[0])} alt={product.name} width={400} height={600} />
            </div>

            <div className={styles.info}>
            
                <div className={styles.container}>
                    <h3>{product.name}</h3>
                    <span>{Intl.NumberFormat('en-PH', { style: 'currency', currency: 'PHP' }).format(product.price)}</span>
                </div>

                <div className={styles.desc}>
                    <p>{product.details}</p>
                </div>
                
                <div className={styles.flex}>
                    <div className={styles.buttons}>
                        <button type='button' className={styles.dec} onClick={decQty}><i className="bi bi-dash"></i></button>
                        <span>{qty}</span>
                        <button type='button' className={styles.inc} onClick={incQty}><i className="bi bi-plus"></i></button>
                    </div>
                    <button type='button' className={styles.button} onClick={() => onAdd(product, qty)}>Add to Cart</button>
                    <button type='button' className={styles.button} onClick={handleBuyNow}>Buy Now</button>
                </div>
            </div>
        </div>

        <div className={styles.label}>You May Also Like</div>

        <div className={styles.recommendation}>
            {products.map((product) => (
                <ProductCard product={product} key={product._id} />
            ))}
        </div>

    </div>
    </>
  );
}


export const getStaticPaths = async () => {
    const query = `*[_type == "product"] {
      slug {
        current
      }
    }
    `;
  
    const products = await client.fetch(query);
  
    const paths = products.map((product) => ({
      params: { 
        slug: product.slug.current
      }
    }));
  
    return {
      paths,
      fallback: 'blocking'
    }
  }
  
  export const getStaticProps = async ({ params: { slug }}) => {
    const query = `*[_type == "product" && slug.current == '${slug}'][0]`;
    const productsQuery = '*[_type == "product"]'
    
    const product = await client.fetch(query);
    const products = await client.fetch(productsQuery);
  
    console.log(product);
  
    return {
      props: { products, product }
    }
  }


export default Product;