import React from 'react';
import Head from 'next/head';
import styles from '../../styles/ShippingAndReturns.module.scss';

const ShippingAndReturns = () => {
  return (
    <>
    <Head>
        <title>Dalaket | Shipping & Returns</title>
        <link rel="icon" href="/logo.png" />
    </Head>
    <div className={styles.shipping}>
        <div className={styles.container}>
          <h2>Shipping</h2>

          <p><i className="bi bi-circle"></i> All taxes and duties are the sole responsibility of the purchaser, these fees are not included in the shipping costs. </p>
          <p><i className="bi bi-circle"></i> DALAKET is not responsible for delays caused in transit. Shipping times may exceed the estimate due to factors outside of our control.</p>
          <p><i className="bi bi-circle"></i> Tracking info will be provided with every order, though the buyer assumes all responsibility once the order has left our premises.</p>
          <p><i className="bi bi-circle"></i> If a package is lost, stolen or damaged in shipment a claim needs to be filed with the shipping service provider used and not with DALAKET. If a package shows that it has been delivered through the tracking number and the customer is unable to locate their package, DALAKET is not responsible and will not issue a refund or store credit. The products covered by each contract &#40;i.e. accepted order&#41; are at your risk upon delivery of the order to the carrier. DALAKET cannot be held responsible for late or missing deliveries.</p>
        </div>

        <div className={styles.container}>
          <h2>Exchanges &amp; Returns</h2>

          <p><i className="bi bi-circle"></i> All sales are final. No refunds or exchanges.</p>
        </div>
    </div>
    </>
  );
}

export default ShippingAndReturns;