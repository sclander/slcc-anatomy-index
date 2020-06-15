import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import {
    update,
    clear,
    selectSearchBarQuery,
} from './searchBarSlice';

function SearchBar() {
    const query = useSelector(selectSearchBarQuery);
    const dispatch = useDispatch();

    const clearButton = (query) => {
        if (query.length > 0) {
            return (
                <span 
                    className="search-bar__clear"
                    onClick={() => dispatch(clear())}
                >X</span>
            )
        }
    }

    return (
        <div className="search-bar">
            <input 
                className="search-bar__input"
                onChange={event => dispatch(update(event.target.value))}
                value={query}
            />
            {clearButton(query)}
        </div>
    );
}

export default SearchBar;