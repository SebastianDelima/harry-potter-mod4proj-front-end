import React, { Component } from 'react';

export default class SpellCard extends Component{
    
    addToFavorites = (e) => {
        debugger
        let objectConfig = {
            method: 'POST',
            headers: {
               'Content-Type':'application/json'
            }, 
            body: JSON.stringify({
             user_id: e.currentTarget.dataset.userId,
             spell_id: e.currentTarget.dataset.id
            })
        }
            fetch('http://127.0.0.1:3000/favorite_spells', objectConfig)
            .then(res => res.json())
            .then(user => this.props.updateUsers(user))
        }
    render() {
        // console.log(this.props.currentUser)
        // console.log(this.props.spell.id)
        let {name, category, effect} = this.props.spell
        return (
            <div>
                <table className="ui inverted puple table">
                <thead>
                    <tr>
                        <th align="left">Name</th>
                        <th align="left">Category</th>
                        <th align="left">Effect</th>
                        <th align="left">Favorite ? </th>
                    </tr>
                    </thead>
                    <tbody>
                    <tr>
                        <td align="left">{name}</td>
                        <td align="left">{category}</td>
                        <td align="left">{effect}</td>
                        <td><button data-id={this.props.spell.id} data-user-id={this.props.currentUser.id} onClick={this.addToFavorites}>Add to Favorite</button></td>
                    </tr>
                    </tbody>
                    
                </table>
                
            </div>
        );
    }
}