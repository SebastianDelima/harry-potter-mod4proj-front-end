import React, { Component } from 'react';
import { Link } from 'react-router-dom';

export default class Hat extends Component{

    constructor(){
        super()
        this.state = {
            house: null
        }
    }

    setHouse = () => {
        this.setState({
            house: ''
        })
    }

    createUser(){
        let objectConfig = {
        method: 'POST',
        headers: {
           'Content-Type':'application/json'
        }, 
        body: JSON.stringify({
          name: this.props.userName,
          house: ''
        })
    }

}
   
    sortHouse = () => {

        let houses = ['Gryffindor', 'Hufflepuff', 'Slytherin', 'Ravenclaw']
           return houses[Math.floor(Math.random() * houses.length)]
      

    }

    render() {

        return (
            <div>
               <img alt='sorting hat' src='https://media1.tenor.com/images/426045f4dc47e5bfaaa2b095ed179895/tenor.gif?itemid=13986854'></img>
               <h1>Your destiny is: {this.sortHouse()} </h1>
               <Link>Continue your magical journey!</Link>
            </div>
        )
        
    }

}