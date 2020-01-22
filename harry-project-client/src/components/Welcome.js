import React, { Component, Fragment } from 'react';
import sound from './harry_song.mp3'
import Switch from 'react-input-switch';


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
        console.log("hello")
        return (
            <Fragment>
            <div>
                
                   <h1>wefojwoifjaiofjaiofje</h1>
            
            </div>
        
            {
            !this.state.audio ? <audio ref='audio_tag' src={sound} type="audio/mp3"  autoPlay /> :null
            }
            <button onClick={this.playAudio}>audio</button>

            </Fragment>
        );
    }
    
}