import React, {useState} from "react";
import { Product } from './';

function SearchBar({placeholder, data, childChange}) {
    const [filteredData, setFilteredData] = useState(data);

    {/* handlefilter 
        is called every time search bar contents are edited. will search through all products
for any that titles match */}
    // const handleFilter = (event) => {
    //     const searchWord = event.target.value;
    //     const newFilter = data.filter((value) => {
    //         return value.name.toLowerCase().includes(searchWord.toLowerCase())
    //     });
    //     setFilteredData(newFilter);

    // };
    return (
        <div>
            <div>
                {/* possible lag here, might only want to call on enter key press*/}
                <input className="searchbar" type="text" placeholder={placeholder} onChange={childChange}/>

            </div>
        </div>
    );
}

export default SearchBar;