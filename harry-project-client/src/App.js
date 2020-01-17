import React, { Fragment } from 'react';
import './App.css';
import Main from './components/Main'
import { BrowserRouter as Router, Route } from 'react-router-dom';
import CharacterContainer from './containers/characterContainer';
import SpellsContainer from './containers/spellsContainer';
import Welcome from './components/Welcome'

class App extends React.Component{
  constructor(){
    super()
    this.state={
      characters:[],
      spells:[]
    }
  }

  componentDidMount(){
    fetch("http://localhost:3000/characters")
    .then(res=>res.json())
    .then(characters=> {
      this.setState({
        characters
      })
    })

    fetch("http://localhost:3000/spells")
    .then(res => res.json())
    .then(spells=>{
      this.setState({
        spells
      })
    })
  }
  render(){

  return (
    <Fragment>
  
  <Router>
    <Route exact path='/' component={Welcome} />
    <Route exact path='/main' component={Main} /> 
    <Route exact path='/characters' render={()=> <CharacterContainer characters={this.state.characters}/>} />
    <Route exact path='/spells' render={()=><SpellsContainer spells={this.state.spells} />} />
  </Router>
  </Fragment>
  )};
}

export default App;
