import { Component } from 'react';

class SeachBox extends Component {
    
  render() {
    const { onSearchChange, className, placeholder } = this.props;
    
    return (
      <input 
        className={className}
        type="search" 
        placeholder={placeholder}
        onChange={onSearchChange}/>
    )
  }
}

export default SeachBox;