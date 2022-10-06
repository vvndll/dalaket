import React, { useEffect, useRef } from 'react';
import { urlFor } from '../lib/client';
import Link from 'next/link';
import { useStateContext } from '../context/StateContext';
import styles from '../styles/Cart.module.scss';
import getStripe from '../lib/getStripe';

const Cart = () => {
    const { setToggleCart, totalQuantities, totalPrice, cartItems, toggleCartItemQuantity, onRemove } = useStateContext();

    const cartRef = useRef();

    useEffect(() => {
        const close = (e) => {
        if (!cartRef.current.contains(e.target)) {
            setToggleCart(false);
        }
        };

        document.addEventListener('mousedown', close);

        return() => {
        document.removeEventListener('mousedown', close);
        }
    });

    const handleCheckout = async () => {
        const stripe = await getStripe();
    
        const response = await fetch('/api/stripe', {
          method: 'POST',
          headers: {
            'Content-Type': 'application/json',
          },
          body: JSON.stringify(cartItems),
        });
    
        if(response.statusCode === 500) return;
        
        const data = await response.json();
    
        stripe.redirectToCheckout({ sessionId: data.id });
      }

  return (
    <div className={styles.cart}>
        <div className={styles.container} ref={cartRef}>

            <div className={styles.header}>
                <span>Cart&#40;<small>{totalQuantities}</small>&#41;</span> <button type='button' onClick={() => setToggleCart(false)}><i className="bi bi-x-lg"></i></button>
            </div>

            {cartItems.length < 1 && (
                <div className={styles.empty}>
                    <p>You don&apos;t have anything in your cart yet.</p>
                    <Link href='/shop' passHref>
                        <button type='button' className={styles.button} onClick={() => setToggleCart(false)}>Go To Shop</button>
                    </Link>
                </div>
            )}

            
            {cartItems.length >= 1 && (
                <>
                    <div className={styles.cont}>
                        {cartItems.map((item) => (
                            <React.Fragment key={item._id}>
                                <div className={styles.item}>
                                    <div className={styles.image}>
                                        <img src={urlFor(item.image[0])} alt={item.name} width={120} height={160} />
                                    </div>
                                    <div className={styles.details}>
                                        <span className={styles.name}>{item.name}</span>
                                        <small className={styles.price}>{Intl.NumberFormat('en-PH', { style: 'currency', currency: 'PHP' }).format(item.price)}</small>
                                        <small className={styles.quant}>
                                            <div className={styles.buttons}>
                                            Qty:
                                                <button type='button' className={styles.dec} onClick={() => toggleCartItemQuantity(item._id, 'dec')}><i className="bi bi-dash"></i></button>
                                                <span>{item.quantity}</span>
                                                <button type='button' className={styles.inc} onClick={() => toggleCartItemQuantity(item._id, 'inc')}><i className="bi bi-plus"></i></button>
                                            </div>
                                        </small>
                                        <small><button type='button' className={styles.remove} onClick={() => onRemove(item)}>Remove</button></small>
                                    </div>
                                </div>
                            </React.Fragment>
                        ))}
                    </div>

                    <div className={styles.fixed}>
                        <div className={styles.total}>
                            <h3>Total:</h3>
                            <h3>{Intl.NumberFormat('en-PH', { style: 'currency', currency: 'PHP' }).format(totalPrice)}</h3>
                        </div>
                       
                        <button type='button' className={styles.button} onClick={handleCheckout}>Checkout</button>
                      
                    </div>
                </>
            )}
            
        </div>
    </div>
  );
}

export default Cart;