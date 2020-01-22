import React, { Fragment } from 'react'
import {  NavLink } from 'react-router-dom';

class Main extends React.Component{
  render(){
      return(
        <Fragment>
        
      <div className="mainContainer">
        <div className="sidenav">
          <a href="#about">About</a>
          <NavLink to='/favorites' exact>Favorites</NavLink>
          {/* <img className="flameButton" src='./imgage.gif' alt="Snow"/> */}
        </div>
        
        <div className="backgroundMain" id='buttonImage'>
         <span></span>
          <button className="btn btn-warning characterMain"><NavLink to='/characters' exact>Wizards</NavLink></button>
        </div>
        <div className="backgroundMain" id='buttonImage'>
         <span></span>
          <button className="btn btn-warning spellMain"><NavLink to='/spells' exact> &nbsp;Spells&nbsp;&nbsp;&nbsp;  </NavLink></button>
        </div>
      </div>
      </Fragment>
      )
      
  }
}

export default Main