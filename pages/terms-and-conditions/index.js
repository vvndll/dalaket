import React from 'react';
import Head from 'next/head';
import styles from '../../styles/Terms.module.scss';

const TermsAndConditions = () => {
  return (
    <>
    <Head>
        <title>Dalaket | Terms & Conditions</title>
        <link rel="icon" href="/logo.ico" />
    </Head>
    <div className={styles.terms}>
        <div className={styles.container}>
            <h2>Terms And Conditions</h2>
            <p><i className="bi bi-circle"></i> The terms and conditions set out below are to be applied to the use of this website. By using this website, you agree to be bound by these terms and conditions. If you do not agree to be bound by these terms and conditions, you may not use this website.</p>
            <p><i className="bi bi-circle"></i> In these terms and conditions, the expressions “we”, “us” and “our” are a reference to &apos;DALAKET&apos;.</p>
            <p><i className="bi bi-circle"></i> By placing an order you are offering to purchase a product on and subject to the following terms and conditions. All orders are subject to availability and confirmation of the order price.</p>
            <p><i className="bi bi-circle"></i> We will communicate acceptance of your offer after we receive confirmation of your payment being processed. We will send you an acknowledgement e-mail confirming acceptance of your order.</p>
            <p><i className="bi bi-circle"></i> All sales are final. Exchanges and cancellations are not permitted.</p>
        </div>
        <div className={styles.container} id='privacy-policy'>
            <h2>Privacy Policy</h2>
            <p><i className="bi bi-circle"></i> The terms and conditions set out below are to be applied to the use of this website. By using this website, you agree to be bound by these terms and conditions. If you do not agree to be bound by these terms and conditions, you may not use this website.</p>
            <p><i className="bi bi-circle"></i> In these terms and conditions, the expressions “we”, “us” and “our” are a reference to &apos;DALAKET&apos;.</p>
            <p><i className="bi bi-circle"></i> By placing an order you are offering to purchase a product on and subject to the following terms and conditions. All orders are subject to availability and confirmation of the order price.</p>
            <p><i className="bi bi-circle"></i> We will communicate acceptance of your offer after we receive confirmation of your payment being processed. We will send you an acknowledgement e-mail confirming acceptance of your order.</p>
            <p><i className="bi bi-circle"></i> All sales are final. Exchanges and cancellations are not permitted.</p>
        </div>
    </div>
    </>
  );
}

export default TermsAndConditions;