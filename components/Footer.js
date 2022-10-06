import React from 'react';
import Link from 'next/link';
import styles from '../styles/Footer.module.scss';

const Footer = () => {
  return (
    <div className={styles.footer}>
      <div className={styles.logo}>
        <h1>dalaket</h1>
        <p>&copy;2022</p>
      </div>

      <div className={styles.right}>
        <div>
          <span>Store Location & Hours:</span>
          <ul>
            <li>Padre Garcia, Batangas</li>
            <li>Monday to Saturday - 10:00 - 5:00</li>
            <li>Sunday - 10:00 - 4:00</li>
          </ul>
        </div>

        <div>
          <ul>
            <li>Tel: +63-9-328-7978</li>
            <li>dalaket@fa.com</li>
          </ul>
          <label htmlFor='email'>Subscribe To Our NewsLetter</label>
          <div className={styles.newsletter}>
            <input type='email' id='email' name='email' placeholder='Email' className={styles.input} />
            <button type='button' className={styles.submit}><i className="bi bi-arrow-right-short"></i></button>
          </div>
          <p>By joining, you agree to receive email marketing ot the contacts provided. Unsubscribe at any time. View our Privacy Policy and Terms of Service.</p>
        </div>
      </div>

      <div className={styles.links}>
        <ul>
          <Link href='/shop' passHref>
            <a><li>Shop All</li></a>
          </Link>
          <Link href='/account/login' passHref>
            <a><li>Login</li></a>
          </Link>
          <Link href='/terms-and-conditions' passHref>
            <a><li>Terms</li></a>
          </Link>
          <Link href='/stockists' passHref>
            <a><li>Stockists</li></a>
          </Link>
          <Link href='/shipping-and-returns' passHref>
            <a><li>Shipping and Returns</li></a>
          </Link>
        </ul>

        <ul>
          <li>Contact</li>
          <a href='https://www.instagram.com' rel='noopener noreferrer'><li>Instagram</li></a>
          <a href='https://www.facebook.com' rel='noopener noreferrer'><li>Facebook</li></a>
          <a href='https://www.pinterest.com' rel='noopener noreferrer'><li>Pinterest</li></a>
          <Link href='/terms-and-conditions#privacy-policy' passHref>
            <a><li>Privacy Policy</li></a>
          </Link>
        </ul>
      </div>

    </div>
  );
}

export default Footer;