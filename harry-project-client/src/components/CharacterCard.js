import React, { Component } from 'react';

export default class CharacterCard extends Component{

    addToFavorites = (e) => {
 
        let objectConfig = {
            method: 'POST',
            headers: {
               'Content-Type':'application/json'
            }, 
            body: JSON.stringify({
             user_id: e.currentTarget.dataset.userId,
             character_id: e.currentTarget.dataset.id
            })
        }
            fetch('http://127.0.0.1:3000/favorite_characters', objectConfig)
        }
    

    render() {
        return (
            <div className="ui cards" id="image">
                <span></span>
                <div id= 'cards'>
                <div className="card" >
                    <div className="image">
                    <img alt="pic" width={280} height={330} src={this.props.character.image} />
                    </div>
                    <div className="content">
                    <div className="header">{this.props.character.name}</div>
                    <div className="right floated">
                        Date Of Birth: {this.props.character.dateBirth}
                    </div>
                    <div className="description">
                        Actor: {this.props.character.actor}
                    </div>
                    </div>
                    <div className="extra content">
                    <div className="meta">
                        <button data-id={this.props.character.id} data-user-id={this.props.currentUser} onClick={this.addToFavorites}>Add to My Wizards</button>
                    </div>
                    </div>
                </div>
               </div>
            </div>
        );
    }
}