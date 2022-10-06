import React, { useState } from 'react'
import Link from 'next/link'
import { AiOutlineShopping } from 'react-icons/ai'

import { Cart } from './'
import { useStateContext } from '../context/StateContext'
import logoImage from '../photos/gameboy.jpg'

const Navbar = () => {
    const { showCart, setShowCart, totalQuantities } = useStateContext();
    return (
        <div className="navbar-container">
            <p>
                <Link href="/">
                    <div className="">
                        <img src ={logoImage} alt="frugalboys logo"/>
                    </div>
                </Link>
            </p>

            <button type="button" className = "cart-icon" onClick={() => setShowCart(true)}>
                <AiOutlineShopping />
                <span className = "cart-item-qty">{totalQuantities}</span>
            </button>

            {showCart &&<Cart />}
        </div>
        
    )
}

export default Navbar
