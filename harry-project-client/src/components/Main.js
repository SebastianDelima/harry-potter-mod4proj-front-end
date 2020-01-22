import React, { Fragment } from 'react'
import {  NavLink } from 'react-router-dom';


class Main extends React.Component{
  
  render(){

  

      return(
        <Fragment>
   
     <div>
       <NavLink to='/characters' exact>Characters</NavLink>
       <p></p>
       <NavLink to='/spells' exact>Spells</NavLink>
       <p></p>
       <NavLink to='/favorites' exact>Favorites</NavLink>
      </div>
      </Fragment>)
  }
}

export default Main