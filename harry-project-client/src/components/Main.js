import React, { Fragment } from 'react'
import {  NavLink } from 'react-router-dom';

class Main extends React.Component{
  render(){
      return(
        <Fragment>
      <div>

        <div className="sidenav">
          <a href="#about">About</a>
          <p></p>
          
          <p></p>
          
          <p></p>
          <NavLink to='/favorites' exact>Favorites</NavLink>
        </div>
        
        <div className="backgroundMain">
          <button className="btn btn-dark characterMain"><NavLink to='/characters' exact>Characters</NavLink></button>
          <button className="btn btn-dark spellMain"><NavLink to='/spells' exact>Spells</NavLink></button>
        </div>
       
      </div>
      </Fragment>
      )
      
  }
}

export default Main