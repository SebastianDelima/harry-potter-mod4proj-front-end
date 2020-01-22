import React, { Fragment } from 'react'
import {  NavLink } from 'react-router-dom';

class Main extends React.Component{
  render(){
      return(
        <Fragment>
      <div className="mainContainer">
        <div className="sidenav" >
          {  
           this.props.userInfo.house === 'Gryffindor' ?
          <img id="shield" src='https://i.ebayimg.com/images/g/EBcAAOSwcDBdiRW1/s-l300.jpg' type='icon'/> :
           <img id="shield" src='https://www.att.com/catalog/en/idse/PopSockets/PopSocket%20Gryffindor/Red-hero-zoom.png' type='icon'/>
           }
      
      <a href="#about" id='mainName'>{this.props.userInfo.name}'s Info</a>
        <a id="houseInfo">House: {this.props.userInfo.house}</a>
        <p></p>
        <hr id="line"></hr>
      <NavLink id="favWiz" to='/favorites' exact>Favorite Wizard's {"&"} Spells</NavLink>
        </div>
        
        <div className="backgroundMain" id='buttonImage'>
         <span></span>
          <button className="btn btn-warning characterMain"><NavLink to='/characters' exact>Wizards</NavLink></button>
        </div>
        <div className="backgroundMain" id='buttonImage'>
         <span></span>
          <button className="btn btn-warning spellMain"><NavLink to='/spells' exact> Spells  </NavLink></button>
        </div>
      </div>
      </Fragment>
      )
      
  }
}

export default Main