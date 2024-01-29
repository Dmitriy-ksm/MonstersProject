import { Component } from 'react';

class CardList extends Component {
    
  render() {
    const { monsters } = this.props;
    
    return (
      monsters.map(item => 
        <div key={item.id}>
          <h1>
            {item.name}
          </h1>
        </div>
      )
    )
  }
}

export default CardList;