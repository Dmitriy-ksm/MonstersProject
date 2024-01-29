import { Component } from 'react';

import SeachBox from './components/search-box/search-box.component';
import CardList from './components/card-list/card-list.component';

import './App.css';

class App extends Component{
  constructor() {
    super();

    this.state = {
      monsters: [],
      searchField: '',
    };
  }

  onSearchChange = (event) => this.setState({searchField:event.target.value.toLowerCase()});

  componentDidMount() {
    fetch('https://jsonplaceholder.typicode.com/users')
      .then(response =>  response.json())
      .then(users => this.setState(() => {
        return {monsters: users}
      }))
  }


  render() {
    
    const { monsters, searchField } = this.state;
    const { onSearchChange } = this;

    const filteredMonsters = monsters.filter((m=>m.name.toLowerCase().includes(searchField)))
    
    return (
      <div className="App">
        <SeachBox 
          className="search-box"
          placeholder="search monster"
          onSearchChange={onSearchChange} 
        />
        <CardList monsters={filteredMonsters} />
      </div>
    );
  }
}

export default App;
