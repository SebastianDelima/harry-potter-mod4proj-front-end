import React, { Component } from 'react';
import {  NavLink } from 'react-router-dom';

export default class Welcome extends Component{

    render() {
        return (
            <div className="backgroundWelcome">
                <h1 className="welcomePhase">Harry potter's Web Page</h1>
                {/* <NavLink to='/favorites' exact>Favorites</NavLink> */}
                <button className="btn btn-secondary welcome"><NavLink to='/signup' exact><h1>Sign Up!</h1></NavLink></button>
                <button className="btn btn-secondary welcome"><NavLink to='/login' exact><h1>Log In!</h1></NavLink></button>
            </div>
        );
    }
    
}