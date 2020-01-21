import React, { Component, Fragment } from 'react'
import CharacterCard from '../components/CharacterCard'
import SpellCard from '../components/SpellCard'

export default class FavoritesContainer extends Component{


    render(){
        return(
            <Fragment>
            <div className="characterCardBackground">
            <div className="ui category search">
            <div className="ui icon input">
                <input className="prompt" type="text" placeholder="Search..."/>
                <i className="search icon"></i>
            </div>
            <div className="results"></div>
            </div>
            <div className="ui two column centered grid">
            { 
                this.props.currentUser.characters.map(char => <CharacterCard currentUser={this.props.currentUser} delete={"delete"} character={char} key={char.id}/>)                
            }
          
            </div>
            <div>
            {              
                this.props.currentUser.spells.map(spell => <SpellCard currentUser={this.props.currentUser} spell={spell} key={spell.id}/>) 
            }
            </div>
        </div>
        </Fragment>
            )
    }
}
