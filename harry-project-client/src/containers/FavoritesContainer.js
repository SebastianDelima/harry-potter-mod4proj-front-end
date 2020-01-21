import React, { Component, Fragment } from 'react'
import CharacterCard from '../components/CharacterCard'
import SpellCard from '../components/SpellCard'

export default class FavoritesContainer extends Component{

    // constructor(){
    //     super()
    //     this.state = {
    //         favorite_characters: null,
    //         favorite_spells: null
    //     }
    // }

    // fetch calls for favorite spells and favorite characters
    // componentDidMount(){

    //   fetch(`http://127.0.0.1:3000/users/${this.props.currentUser}`)
    //   .then(res => res.json())
    //   .then(favorite_characters => this.setState({
    //       favorite_characters: favorite_characters.characters,
    //       favorite_spells: favorite_characters.spells
    //     }))
    
    // }

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

                this.state.favorite_characters ? this.state.favorite_characters.map(char => <CharacterCard character={char} key={char.id}/>) :
                <div></div>
                
            }
          
            </div>
            <div>
            { 
                
                this.state.favorite_spells ? this.state.favorite_spells.map(spell => <SpellCard spell={spell} key={spell.id}/>) :
                <div></div>

            }
            </div>
        </div>
        </Fragment>
            )
    }
}
