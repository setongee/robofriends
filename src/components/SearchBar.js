import React from 'react';
import './search.css'

const SearchBar = ( { onSearch, placeholder } ) => {

    return (
        <div className = 'input'>
            <input
                type='search' 
                placeholder= {placeholder}
                onChange = {onSearch}
                style = {
                    {
                        width : '100%',
                        padding : '15px 25px',
                        borderRadius : '100px',
                        outline : 'none',
                        fontSize : '13px'
                    }
                }
                autoFocus = {true}
            />
        </div>
    )
}

export default SearchBar