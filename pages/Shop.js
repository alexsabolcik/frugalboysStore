//shop page, will load all products and display

import React from 'react';
import {client} from '../lib/client';
import { Product } from '../components';
import { AiOutlineSearch } from 'react-icons/ai';
import { IconContext } from 'react-icons';
import { SearchBar } from '../components';



const Shop = ({ products }) => {
  return(
    <div className="">

      <div className="search-container">
        {/* search bar container */}
        <IconContext.Provider value={{ className: "", size: 35 }}>
          <AiOutlineSearch />
        </IconContext.Provider>

        <SearchBar placeholder="Search Products" data={products}/>
      </div>
      <div className="products-container">
        {/*}
          {products?.map((product) => <Product key={product._id} product={product} />)}
  */}
      </div>
    </div>
  )
}

//getting sanity products
export const getServerSideProps = async () => {
  const query = '*[_type == "product"]';
  const products = await client.fetch(query);
  return {
    props: { products }
  }
}
    
export default Shop
    