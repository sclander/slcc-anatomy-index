import React, { useState } from 'react';
import { useSelector, useDispatch } from 'react-redux';

function SearchBar() {
    const [query, setQuery] = useState();

    return (
        <div class="search-bar">
            <input 
                className="search-bar__input"
                onChange={event => setQuery(event.target.value)}
            />
            <h1>{ query }</h1>
        </div>
    );
}

export default SearchBar;