import React, { Fragment } from 'react'
import CharacterCard from '../components/CharacterCard'

class CharacterContainer extends React.Component{
  render(){
      return(
        <Fragment>
        <div className="characterCardBackground">
          <div className="ui category search">
          <div className="ui icon input">
              <input className="prompt" type="text" placeholder="Search..." onChange={this.props.serchCharacter}/>
              <i className="search icon"></i>
          </div>
          <div className="results"></div>
          </div>
          <div className="ui two column centered grid">
            {
            this.props.searchedCharacter.map(character => <CharacterCard key={character.id} character={character}/>)
            }
          </div>
        </div>
        </Fragment>
        )
  }
}

export default CharacterContainer
