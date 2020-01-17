import React from 'react'
import {  NavLink } from 'react-router-dom';

class Main extends React.Component{
  render(){
      return(
      <div>
       <NavLink to='/characters' exact>Characters</NavLink>
       <p></p>
       <NavLink to='/spells' exact>Spells</NavLink>
      </div>)
  }
}

export default Main