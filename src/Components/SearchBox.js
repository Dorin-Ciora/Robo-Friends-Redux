import React from 'react';

const SearchBox = ({searchField, searchChange}) => {
    console.log('searchBox')
    return (
        <div className='pa2'>
        <label>
        <input
        className ='pa3 ba b--green bg-lightest-blue'
        type='search' 
        placeholder='search robots'
        onChange={searchChange} 
        />
        </label>
        </div>
    );
}
export default SearchBox; 