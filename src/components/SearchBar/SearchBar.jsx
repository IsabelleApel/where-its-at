import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faMagnifyingGlass } from '@fortawesome/free-solid-svg-icons';
import { useState } from 'react';
import './searchBar.css';

function SearchBar({handleChange}) {
  const [inputValue, setInputValue] = useState('');

  const handleInput = (e) => {
    const value = e.target.value
    setInputValue(value)
    handleChange(value)
  }

  return (
    <section className="search-bar">
      <FontAwesomeIcon icon={faMagnifyingGlass} className='search-icon' />
      <input 
        onChange={handleInput}
        type="text"
        value={inputValue}  
        className='search-field'
      />
    </section>
  )
}

export default SearchBar;