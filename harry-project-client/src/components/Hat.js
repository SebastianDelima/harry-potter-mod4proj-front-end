import React, { Component } from 'react';
import { Link } from 'react-router-dom';

export default class Hat extends Component{


    postUser(house){
       
        let objectConfig = {
        method: 'POST',
        headers: {
           'Content-Type':'application/json'
        }, 
        body: JSON.stringify({
          name: this.props.userName,
          house: house
        })
    }
        fetch('http://localhost:3000/users', objectConfig)
        .then(res => res.json())
        .then(user => this.props.setCurrentUser(user))
    }
   
    sortHouse = () => {

        let houses = ['Gryffindor', 'Hufflepuff', 'Slytherin', 'Ravenclaw']
           return houses[Math.floor(Math.random() * houses.length)]
      
    }

    render() {
     let house = this.sortHouse()
        return (
            <div>
               <img alt='sorting hat' src='https://media1.tenor.com/images/426045f4dc47e5bfaaa2b095ed179895/tenor.gif?itemid=13986854'></img>
               <h1>Your destiny is: {house} </h1>
               <Link to='main' value ="link" onClick={this.postUser(house)}
                >Continue your magical journey!</Link>
            </div>
        )
        
    }

}