import React, { Fragment } from 'react'
import CharacterCard from '../components/CharacterCard'

class CharacterContainer extends React.Component{
  render(){
      return(
        <Fragment>
        <div class="ui category search">
        <div class="ui icon input">
            <input className="prompt" type="text" placeholder="Search..." />
            <i className="search icon"></i>
        </div>
        <div className="results"></div>
        </div>
        <div className="ui two column centered grid">
          {
          this.props.characters.map(character => <CharacterCard key={character.id} character={character}/>)
          }
        </div>
        </Fragment>
        )
  }
}

export default CharacterContainer
