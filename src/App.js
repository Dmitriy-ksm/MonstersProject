import { useState, useEffect } from 'react';

import SeachBox from './components/search-box/search-box.component';
import CardList from './components/card-list/card-list.component';

import './App.css';

const App = () => {
  const [monsters, setMonsters] = useState([]);
  const [searchField, setSearchField] = useState('');

  const [filteredMonster, setFilteredMonsters] = useState(monsters);

  useEffect(()=>{
    fetch('https://jsonplaceholder.typicode.com/users')
      .then(response =>  response.json())
      .then(users => setMonsters(users))
  }, []);

  useEffect(()=>{
    setFilteredMonsters(monsters.filter((m=>m.name.toLowerCase().includes(searchField))))
  }, [monsters, searchField]);

  const onSearchChange = event => setSearchField(event.target.value.toLowerCase());

  return (
    <div className="App">
      <h1 className='app-title'>Monsters Rolodex</h1>
      <SeachBox 
        className="monster-search-box"
        placeholder="Search monster"
        onSearchChange={onSearchChange} 
      />
      <CardList monsters={filteredMonster} />
    </div>
  )
}

export default App;
