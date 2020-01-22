import React, { Component } from 'react';

export default class Welcome extends Component{

    render() {
        return (
            <div className="backgroundWelcome">
                <h1 className="welcomePhase">Harry potter's Web Page</h1>
                <button className="btn btn-secondary welcome"><h1>Sign Up!</h1></button>
                <button className="btn btn-secondary welcome"><h1>Log in!</h1></button>
            </div>
        );
    }
    
}