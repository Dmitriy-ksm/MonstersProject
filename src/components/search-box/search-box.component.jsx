import './search-box.styles.css';

const SeachBox = ({ onSearchChange, className, placeholder }) => 
  <input 
    className={`search-box ${className}`}
    type="search" 
    placeholder={placeholder}
    onChange={onSearchChange}
  />

export default SeachBox;