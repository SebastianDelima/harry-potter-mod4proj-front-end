import React, { Fragment } from 'react'
import {  NavLink } from 'react-router-dom';

class Main extends React.Component{


  render(){


      return(
        <Fragment>
      <div className="mainContainer">
<<<<<<< HEAD
        <div className="sidenav" > 
          {this.props.userInfo.house === "Gryffindor" ? <img id="shield" src='https://www.att.com/catalog/en/idse/PopSockets/PopSocket%20Gryffindor/Red-hero-zoom.png' alt='icon'/> : null}
          {this.props.userInfo.house === "Hufflepuff" ? <img id="shield" src='https://animeandthings.com/wp-content/uploads/2018/07/hufflepuff.png' alt='icon'/> : null}
          {this.props.userInfo.house === "Slytherin" ? <img id="shield" src='https://cdn.shopify.com/s/files/1/0221/1146/products/Slytherin_Embroidered_Patch_Scaled_grande.png?v=1553528816'  alt='icon'/> : null}
          {this.props.userInfo.house === "Ravenclaw" ? <img id="shield" src='https://cdn.shopify.com/s/files/1/0221/1146/products/Ravenclaw_Embroidered_Patch_Scaled_grande.png?v=1553528845' alt='icon'/> : null}
        <a href="#Main" id='mainName'>{this.props.userInfo.name}'s Info</a>
        <a href="#Main" id="houseInfo">House: {this.props.userInfo.house}</a>
=======
        <div className="sidenav" >
        
         {
           this.props.userInfo.house === "Hufflepuff" ? 
           <img id="shield" src='https://images-na.ssl-images-amazon.com/images/I/61Em9qmOfuL._AC_SX679_.jpg' type='icon'/> : null
         }

         {
           this.props.userInfo.house === "Gryffindor" ? 
           <img id="shield" src='https://www.att.com/catalog/en/idse/PopSockets/PopSocket%20Gryffindor/Red-hero-zoom.png' type='icon'/> : null
         }

        {
           this.props.userInfo.house === "Slytherin" ? 
           <img id="shield" src='https://images-na.ssl-images-amazon.com/images/I/61dMJr-zvIL._AC_SX679_.jpg' type='icon'/> : null
         }

         {
           this.props.userInfo.house === "Ravenclaw" ? 
           <img id="shield" src='https://images-na.ssl-images-amazon.com/images/I/71xw3MoQOUL._AC_SX679_.jpg' type='icon'/> : null
         }
           
      
      <a href="#about" id='mainName'>{this.props.userInfo.name}'s Info</a>
        <a id="houseInfo">House: {this.props.userInfo.house}</a>
>>>>>>> db9793b9885c2eebb146aa233785670b20bc4352
        <p></p>
        <hr id="line"></hr>
      <NavLink id="favWiz" to='/favorites' exact>Favorite Wizard's {"&"} Spells</NavLink>
        </div>
        
        <div className="backgroundMain" id='buttonImage'>
         <span></span>
          <button className="btn btn-warning characterMain"><NavLink to='/characters' exact>Wizards</NavLink></button>
        </div>
        <div className="backgroundMain" id='buttonImage'>
          <button className="btn btn-warning spellMain"><NavLink to='/spells' exact> Spells  </NavLink></button>
         <span></span>
        </div>
      </div>
      </Fragment>
      )
      
  }
}

export default Main