import React, { Component } from 'react';
import {  NavLink } from 'react-router-dom';
import sound from './harry_song.mp3'


export default class Welcome extends Component{

    constructor(){
        super()
        this.state ={
            audio: true
        }
    }

    playAudio = () => {

        if(!this.state.audio){
        this.setState({
            audio: true
        })
    }else{
        this.setState({
            audio: null
        })
    }
    }

    render() {
        return (
           
            <div className="backgroundWelcome">
                <h1 className="welcomePhase">My Horcrux</h1>

                <div className="welcomeButtonContainer">
                <button className="btn btn-secondary welcome"><NavLink to='/signup' exact><h1>Sign Up!</h1></NavLink></button>
                <button className="btn btn-secondary welcome"><NavLink to='/login' exact><h1>Log In!</h1></NavLink></button>
                </div>
                
                <div className="welcomeAudioButton">
                <button onClick={this.playAudio} className="audioPosition">audio</button>
                </div>
                    {
                 this.state.audio ? <audio ref='audio_tag' src={sound} type="audio/mp3"  autoPlay /> :null
                }
               
            </div>
        
           

      
        );
    }
    
}