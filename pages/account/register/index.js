import React, { useState } from 'react';
import Link from 'next/link';
import Head from 'next/head';
import styles from '../../../styles/Register.module.scss';

const Register = () => {
  const initialState = {first_name: '', last_name: '', email: '', password: '', confirm_pass: '' };
  const [userData, setUserData] = useState(initialState);
  const {first_name, last_name, email, password, confirm_pass} = userData;

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
        <title>Dalaket | Register</title>
    </Head>
    <div className={styles.register}>
      <div className={styles.container}>
        <h2>Register</h2>
        <form onSubmit={handleSubmit}>
          <input type='text' name='first_name' value={first_name} onChange={handleChangeInput} placeholder='First Name' className={styles.input} required />
          <input type='text' name='last_name' value={last_name} onChange={handleChangeInput} placeholder='Last Name' className={styles.input} required />
          <input type='email' name='email' value={email} onChange={handleChangeInput} className={styles.input} placeholder='Email' required />
          <input type='password' name='password' value={password} onChange={handleChangeInput} className={styles.input} placeholder='Password' required />
          <input type='password' name='confirm_pass' value={confirm_pass} onChange={handleChangeInput} className={styles.input} placeholder='Confirm Password' required />
          <input type='submit' name='submit' className={styles.button} value='Register' required />

          <div>
            <p>Already have an account?</p>
            <Link href='/account/login' passHref>
              <a><p>Go to Log-In.</p></a>
            </Link>
          </div>
        </form>
      </div>
    </div>
    </>
  );
}

export default Register;