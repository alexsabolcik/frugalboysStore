import React from 'react';
import Link from 'next/link'
import { AiFillInstagram } from 'react-icons/ai';


const Footer = () => {
    return (
        <div className = "footer-container">

            <p>2022 Frugalboys all rights reserved</p>
            <p classname="icons">
                <Link href="https://www.instagram.com/frugalboys">
                    <AiFillInstagram />
                </Link>
            </p>
        </div>
    )
}

export default Footer