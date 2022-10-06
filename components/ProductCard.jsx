import React from "react";
import Link from "next/link";
import Image from "next/image";
import styles from '../styles/ProductCard.module.scss';
import { urlFor } from "../lib/client";

const ProductCard = ({ product: { image, name, slug, price} }) => {

  return (
        <Link href={`/shop/${slug.current}`}>
            <a>
                <div className={styles.container}>

                    <img src={urlFor(image && image[0])} alt={name} />

                    <div className={styles.overlay}>
                        <div className={styles.details}>
                            <h3>dalaket vase</h3>
                            <h2>{name}</h2>
                            <span>{Intl.NumberFormat('en-PH', { style: 'currency', currency: 'PHP' }).format(price)}</span>
                        </div>
                    </div>

                </div>
            </a>
        </Link>
       
  );
}

export default ProductCard;