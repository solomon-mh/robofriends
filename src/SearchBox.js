import React from "react";
import "./styles.css";
const SearchBox = ({searchField, searchChange }) => {
  return (
    <div className='search-box'>
      <input type='search' placeholder='search robots'
      onChange = {searchChange}
      /> 
    </div>
  );
};
export default SearchBox;
