import React from 'react';
//import logo from './logo.svg';

import { CardList } from './components/card-list/card-list.component';

import { SearchBox } from './components/search-box/search-box.component';

import './App.css';

class App extends React.Component{
  
  constructor(){
    super();
    
    this.state ={
      //string: 'My Name is Ashraful'
      monsters: [
        // {
        //   name: 'Frankenstein',
        //   id: '1'
        // }
      ],
      searchField: ''
    };

    //this.handleChange = this.handleChange.bind(this);

  }

  componentDidMount(){
    fetch('https://jsonplaceholder.typicode.com/users')
    .then(response => response.json())
    .then(users=> this.setState({ monsters: users}));
  }

  handleChange = (e) =>{
    this.setState({searchField: e.target.value})
  }

  render(){

    const {monsters, searchField} = this.state;

    // const monsters = this.state.monsters;
    // const searchField = this.state.monsters;

    const filteredMonsters = monsters.filter( monster => 
      monster.name.toLowerCase().includes(searchField.toLowerCase())
    );

    return (
      <div className="App">
        {/* <CardList name="Ashraful"/> */}

        <h1> Monsters Rodolex</h1>
        <SearchBox 
          placeholder="Search Monster" 
          handleChange={this.handleChange}
        />
        
        {/* <CardList monsters={ this.state.monsters} />   */}

        <CardList monsters={filteredMonsters}/>

        {/* <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <p>
            Edit <code>src/App.js</code> and save to reload.
          </p>
          <p>{ this.state.string }</p>
          <button onClick={()=>{ this.setState({ string: 'My Name is Dhiman'})}}> Change Text </button>
        </header> */}
      </div>
    );
  }

}

export default App;
