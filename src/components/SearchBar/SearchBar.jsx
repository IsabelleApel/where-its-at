import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faMagnifyingGlass } from '@fortawesome/free-solid-svg-icons';
import './searchBar.css';

function SearchBar({setInputValue, inputValue}) {
  return (
    <section className="search-bar">
      <FontAwesomeIcon icon={faMagnifyingGlass} className='search-icon' />
      <input 
        onChange={(e) => setInputValue(e.target.value)}
        type="text"
        value={inputValue}  
        className='search-field'
      />
    </section>
  )
}

export default SearchBar;