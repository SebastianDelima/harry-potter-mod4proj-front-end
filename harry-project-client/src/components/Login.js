import React, { Component } from 'react';

export default class Login extends Component{
    
    render() {
        return (
            <div>
                <form className="ui form">
                    <div className="field">
                        <label>First Name</label>
                        <input type="text" name="first-name" placeholder="First Name" onChange={this.props.setLogInUser}/>
                    </div>
                    <button className="ui button" type="submit" onClick={this.props.setCurrentUser}>Log in</button>
                </form>
            </div>
        );
    }
}