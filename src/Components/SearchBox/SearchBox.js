import React from 'react';

const SearchBox = ({ searchfield, searchChange }) => {
    return (
        <div className='pa2'>
            <input 
                className='pa3 ba br3 bw1 b--green bg-lightest-blue'
                type='search'
                placeholder='Search for tail'
                onChange={searchChange}
            />
        </div>
    );
}

export default SearchBox;