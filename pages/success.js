import React, { useState, useEffect } from 'react';
import Link from 'next/link';
import { BsBagCheckFill } from 'react-icons/bs';

import { useStateContext } from '../context/StateContext';

import {client} from '../lib/client';

const Success = () => {
  const { cartItems, setCartItems, setTotalPrice, setTotalQuantities } = useStateContext();
  
  
  const tempHandle = async (items) => {
    // const stripe = await getStripe();
    console.log("cart items:")
    console.log(items);
    const response = await fetch('/api/sanity_remove', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(items),
    });

    if(response.statusCode === 500) return;

    const data = await response.json();
  }
  //this will run as soon as page is loaded
  useEffect(() => {
    const saveCartItems = cartItems;
    console.log("cart items before async function");
    console.log(saveCartItems);
    tempHandle(saveCartItems);
    //localStorage.clear();
    //setCartItems([]);
    //setTotalPrice(0);
    //setTotalQuantities(0);
    
  }, []);

  return (
    <div className="success-wrapper">
      <div className="success">
        <p className="icon">
          <BsBagCheckFill />
        </p>
        <h2>Thank you for your order!</h2>
        <p className="email-msg">Check your email inbox for the receipt.</p>
        <p className="description">
          If you have any questions, please email
          <a className="email" href="mailto:order@example.com">
            order@example.com
          </a>
        </p>
        <Link href="/">
          <button type="button" width="300px" className="btn">
            Continue Shopping
          </button>
        </Link>
      </div>
    </div>
  )
}



export default Success