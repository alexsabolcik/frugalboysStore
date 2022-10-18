import React from 'react';

import {client} from '../lib/client';

import { Product, FooterBanner, HeroBanner }
from '../components'

import Link from 'next/link'



const Home = ({ products, bannerData }) => {
  return (
    <>
      
      <HeroBanner heroBanner = {bannerData.length && bannerData[0]}/> 
      
      <div className="products-heading">
        <h2>Featured Items</h2>
      </div>

      <div className="products-container">
        {/* will just show first 6 products for now, could add featured prod check */}
        {products?.slice(0, 6).map((product) => <Product key={product._id} product={product} />)}
      </div>

      <div className="shopall-btn-container">
        <Link href="/Shop">
        <button
          type="button"
          className="btn">
            Shop All
        </button>
        </Link>
      </div>
      
    </>
  )
}

export const getServerSideProps = async () => {
  const query = '*[_type == "product" && isSold == false]';
  const products = await client.fetch(query);

  const bannerQuery = '*[_type == "banner"]';
  const bannerData = await client.fetch(bannerQuery);

  return {
    props: { products, bannerData }
  }
}

export default Home