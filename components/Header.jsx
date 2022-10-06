import React from 'react';
import Link from 'next/link';
import { Cart } from './.';
import { useStateContext } from '../context/StateContext';
import styles from '../styles/Header.module.scss';

const navList = [
  {title: 'Shop', path: '/shop'},
  {title: 'About', path: '/about'},
  {title: 'Terms', path: '/terms-and-conditions'},
];

const Header = () => {
  const { toggleCart, setToggleCart, totalQuantities } = useStateContext();

  return (
    <div className={styles.header}>

      <nav className={styles.nav}>
        <ul className={styles.navList}>
          {navList.map((navItem, index) => {
            return (
              <Link key={index} href={navItem.path} passHref>
                <a><li className={styles.navItem}>{navItem.title}</li></a>
              </Link>
            );
          })}
        </ul>
      </nav>

      <Link href='/' passHref>
        <a><h1>dalaket</h1></a>
      </Link>

      <div className={styles.right}>
        <Link href='/terms-and-conditions#privacy-policy'>
          <a><button type='button'>Privacy Policy</button></a>
        </Link>
        <Link href='/shipping-and-returns' passHref>
          <a><button type='button'>Returns</button></a>
        </Link>
        <button type='button' onClick={() => setToggleCart(true)}>Cart &#40;<small>{totalQuantities}</small>&#41;</button>
      </div>

      {toggleCart && <Cart />}

    </div>
  );
}

export default Header;