import React, { useState } from 'react'
import Link from 'next/link'
import { AiOutlineShopping, AiOutlineMenu } from 'react-icons/ai'

import { Cart } from './'
import { useStateContext } from '../context/StateContext'




const Navbar = () => {
    const { showCart, setShowCart, totalQuantities } = useStateContext();

    const [isShown, setIsShown] = useState(false);

    const handleClick = event => {
     // 👇️ toggle shown state
        setIsShown(current => !current);

        // 👇️ or simply set it to true
        // setIsShown(true);
    };

    return (
        <div>
        <div className="navbar-container">
            
            <div className="">
                <button type="button" className= "nav-icon" onClick={handleClick}>
                     <AiOutlineMenu />
                </button>

                {/* <div className="menu-wrapper">
                {isShown && (
                    <div className="menu-container">
                        <h4>Shop All</h4>
                        <button type="button" className="" onClick={handleClick}>
                            Close menu
                        </button>
                    </div>
                )}
                </div> */}

            </div>
            <Link href="/">
                <div className="frugalboys-logo">
                      <h3>FrugalBoys</h3>
                 </div>
            </Link>
          

            <button type="button" className = "cart-icon" onClick={() => setShowCart(true)}>
                <AiOutlineShopping />
                <span className = "cart-item-qty">{totalQuantities}</span>
            </button>

            {showCart &&<Cart />}
        </div>
        <div className="">
                {isShown && (
                    <div className="menu-container">

                        <ul>
                            <Link href="/">
                            <li onClick={handleClick}>Home</li>
                            </Link>

                            <Link href="/Shop">
                            <li onClick={handleClick}>All Products</li>
                            </Link>

                            <li>Cart</li>

                            <li onClick={handleClick}>Close</li>
                        </ul>

                    </div>
                )}
                </div>
        </div>
        
    )
}

export default Navbar
