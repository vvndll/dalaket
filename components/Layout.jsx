import React from 'react';
import { Header, Footer } from './.';
import styles from '../styles/Layout.module.scss';

const Layout = ({ children }) => {
  return (
    <>
    <header><Header /></header>
    <main className={styles.main}>{children}</main>
    <footer><Footer /></footer>
    </>
  );
}

export default Layout;