import React, { Component, Fragment } from 'react'
import CharacterCard from '../components/CharacterCard'

export default class FavoritesContainer extends Component{

    constructor(){
        super()
        this.state = {
            favorite_characters: null
        }
    }

    // fetch calls for favorite spells and favorite characters
    componentDidMount(){
      fetch('http://127.0.0.1:3000/users/13')
      .then(res => res.json())
      .then(favorite_characters => this.setState({favorite_characters: favorite_characters.characters}))
    }

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
                this.state.favorite_characters ? this.state.favorite_characters.map(char => <CharacterCard character={char} key={char.id}/>) : <div></div>}
          
            </div>
        </div>
        </Fragment>
            )
    }
}
