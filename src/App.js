import { Component } from 'react';
import './App.css';

class App extends Component{
  constructor() {
    super();

    this.state = {
      monsters: [
        {
          name: 'Linda',
          id: 1,
        },
        {
          name: 'Frank',
          id: 2,
        },
        {
          name: 'Jacky',
          id: 3,
        },
        {
          name: 'Andrei',
          id: 4,
        }
      ]
    };
  }

  render() {
    return (
      <div className="App">
       {this.state.monsters.map(item => 
        <div key={item.id}>
          <h1>
            {item.name}
          </h1>
        </div>
       )}
      </div>
    );
  }
}

export default App;
