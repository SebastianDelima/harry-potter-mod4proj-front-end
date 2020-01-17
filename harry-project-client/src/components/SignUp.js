import React, { Component } from 'react';
import { Link } from 'react-router-dom';

export default class SignUp extends Component{
    render() {
        return (
            <div>
                <form className="ui form">
                    <div className="field">
                        <label>First Name</label>
                        <input type="text" name="first-name" placeholder="First Name" onChange={this.props.setLogInUser}/>
                    </div>
                    <Link to ={{
                        pathname:'/hat',
                        hatProps:{
                            name: ''
                        }
                    }}
                        className="ui button"
                        type="submit"
                        onClick={this.props.signUp}>
                        Sign up
                    </Link>
                </form>
            </div>
        );
    }
}