import React from 'react';

const SearchBox = ({searchChange}) =>{
	return(
		<div className='pa2 tc'>
			 <input 
			 className='pa3 ba bg-lightest-blue tc'
			 type ='search' 
			 placeholder='search robots' 
			 onChange = {searchChange}
			 />
		</div>
	);
}

export default SearchBox;