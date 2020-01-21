import React from 'react'
import SpellCard from '../components/SpellCard'

class SpellsContainer extends React.Component{
  render(){
      return(
      <div className="spellBackground">
        {
          this.props.spells.map(spell => <SpellCard key={spell.id} spell={spell} />)
        }
      </div>
      )
  }
}

export default SpellsContainer