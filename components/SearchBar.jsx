import React, {useState} from "react";
import { Product } from './';

function SearchBar({placeholder, data}) {
    const [filteredData, setFilteredData] = useState(data);

    const handleFilter = (event) => {
        const searchWord = event.target.value;
        const newFilter = data.filter((value) => {
            return value.name.toLowerCase().includes(searchWord.toLowerCase())
        });
        setFilteredData(newFilter);

    };
    return (
        <div>
            <div className="inputs">
                {/* possible lag here, might only want to call on enter key press*/}
                <input type="text" placeholder={placeholder} onChange={handleFilter}/>

            </div>
            <div className="results">

                <div className="products-container">
                    {filteredData?.map((product) => <Product key={product._id} product={product} />)}
                </div>
            </div>
            
        </div>
    );
}

export default SearchBar;