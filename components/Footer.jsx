import React from 'react';
import Link from 'next/link'
import { AiFillInstagram } from 'react-icons/ai';


const Footer = () => {
    return (
        <div className = "footer-container">

            <p>2022 Frugalboys all rights reserved</p>
            <p className="icons">
                
                    <AiFillInstagram href="https://www.instagram.com/frugalboys"/>
                
            </p>
        </div>
    )
}

export default Footer