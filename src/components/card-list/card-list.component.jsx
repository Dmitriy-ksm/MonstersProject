import { Component } from 'react';

import Card from '../card/card.component';

import './card-list.styles.css';

class CardList extends Component {
    
  render() {
    const { monsters } = this.props;
    
    return (
      <div className='card-list'>
        {monsters.map(item => 
          <Card key={item.id} item={item} />
        )}
      </div>
    )
  }
}

export default CardList;