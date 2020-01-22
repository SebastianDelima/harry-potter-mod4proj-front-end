import React, { Component, Fragment } from 'react';
import sound from './harry_song.mp3'



export default class Welcome extends Component{

    constructor(){
        super()
        this.state ={
            audio: null
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
                <h1 className="welcomePhase">Harry potter's Web Page</h1>
                <button className="btn btn-secondary welcome"><h1>Sign Up!</h1></button>
                <button className="btn btn-secondary welcome"><h1>Log in!</h1></button>
                <button onClick={this.playAudio}>audio</button>
                {
            !this.state.audio ? <audio ref='audio_tag' src={sound} type="audio/mp3"  autoPlay /> :null
            }
           
            </div>
        
           

      
        );
    }
    
}