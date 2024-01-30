import Card from '../card/card.component';

import './card-list.styles.css';

const CardList = ({monsters}) => 
  <div className='card-list'>
    {monsters.map(item => 
      <Card key={item.id} item={item} />
    )}
  </div>

export default CardList;