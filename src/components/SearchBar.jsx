import React from 'react';

function SearchBar(props) {
    return (

        <form>
            <input type="text" placeholder="Search..."/>
            <label>
                <input type="checkbox"/>
                {' '}{/*blank*/}
                Only show products in stock
            </label>
        </form>

    );
}

export default SearchBar;