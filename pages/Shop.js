//shop page, will load all products and display

import React from 'react';
import {client} from '../lib/client';
import { Product } from '../components';
import { AiOutlineSearch } from 'react-icons/ai';
import { IconContext } from 'react-icons';
import { SearchBar } from '../components';
import { useState } from 'react'


const Shop = ({ products }) => {
  // State for search bar
  const [filteredData, setFilteredData] = useState(products);

  {/* handlefilter 
      is called every time search bar contents are edited. will search through all products
for any that titles match */}
  const handleFilter = (event) => {
      
      const searchWord = event.target.value;
      const newFilter = products.filter((value) => {
          return value.name.toLowerCase().includes(searchWord.toLowerCase())
      });
      setFilteredData(newFilter);

  };

  // Main body of page
  return(
    <div className="">

      <div className="search-container">
        {/* search bar container iconcontext is used to change size */}
        <IconContext.Provider value={{ className: "", size: 35 }}>
          <AiOutlineSearch />
        </IconContext.Provider>

        <SearchBar placeholder="Search Products" data={products} childChange={handleFilter}/>
        
        
      </div>
  
      <div className="products-container">
          {/* this could be split with a variable that increases every time show more is clicked */}
          {filteredData?.map((product) => <Product key={product._id} product={product} />)}

      </div>
    </div>
  )
}

//getting sanity products
export const getServerSideProps = async () => {
  const query = '*[_type == "product" && isSold == false]';
  const products = await client.fetch(query);
  return {
    props: { products }
  }
}
    
export default Shop
    