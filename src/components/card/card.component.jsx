import { Component } from 'react';

import './card.styles.css';

class CardList extends Component {
    
  render() {
    const { item } = this.props;
    const { id, name, email } = item; 
    return (
      <div className='card-container'>
        <img alt={`monster ${name}`} src={`https://robohash.org/${id}?set=set2&size=180x180`}/>
        <h2>
          {name}
        </h2>
        <p>{email}</p>
      </div>
    )
  }
}

export default CardList;