import React, { Fragment } from 'react';
import logo from './logo.svg';
import './App.css';
import Main from './components/Main'
import { BrowserRouter as Router, Route, NavLink } from 'react-router-dom';
import CharacterContainer from './containers/characterContainer';
import SpellsContainer from './containers/spellsContainer';

class App extends React.Component{
  render(){
  return (
    <Fragment>
  
  <Router>
    <Route exact path='/main' component={Main} /> 
    <Route exact path='/characters' component={CharacterContainer} />
    <Route exact path='/spells' component={SpellsContainer} />
  </Router>
  </Fragment>
  )};
}

export default App;
