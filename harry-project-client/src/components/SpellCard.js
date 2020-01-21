import React, { Component } from 'react';

export default class SpellCard extends Component{
    render() {
        let {name, category, effect} = this.props.spell
        return (
            <div>
                <table class="ui inverted puple table">
                <thead>
                    <tr>
                        <th align="left">Food</th>
                        <th align="left">Calories</th>
                        <th align="left">Protein</th>
                    </tr>
                    </thead>
                    <tbody>
                    <tr>
                        <td align="left">{name}</td>
                        <td align="left">{category}</td>
                        <td align="left">{effect}</td>
                    </tr>
                    </tbody>
                </table>
            </div>
        );
    }
}