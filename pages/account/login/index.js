import React, { useState } from 'react';
import Link from 'next/link';
import Head from 'next/head';
import styles from '../../../styles/Login.module.scss';

const Login = () => {
  const initialState = { email: '', password: '' };
  const [userData, setUserData] = useState(initialState);
  const { email, password } = userData;

  const handleChangeInput = (e) => {
    setUserData({
      ...userData,
      [e.target.name]: e.target.value,
    });
  }

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log(userData);
  }
  return (
    <>
    <Head>
        <title>Dalaket | Login</title>
    </Head>
    <div className={styles.login}>
      <div className={styles.container}>
        <h2>Log-In</h2>
        <form onSubmit={handleSubmit}>
          <input type='email' name='email' value={email} onChange={handleChangeInput} className={styles.input} placeholder='Email' required />
          <input type='password' name='password' value={password} onChange={handleChangeInput} className={styles.input} placeholder='Password' required />
          <input type='submit' name='submit' className={styles.button} value='Log-In' required />

          <div>
            <p>Never been here before?</p>
            <Link href='/account/register' passHref>
              <a><p>Create your account.</p></a>
            </Link>
          </div>
        </form>
      </div>
    </div>
    </>
  );
}

export default Login;