import React, { Component, Fragment } from 'react';

export default class Login extends Component{

    constructor(){
        super()
        this.state = {
            checked: null
        }
    }
    
    clickBox = () => {

    if(this.state.checked){
        this.setState({
            checked: null
        })
    }else{
        this.setState({
            checked: true
       })
     }
    }

    render() {
        return (
            <div className="logInContainer">
            <div className="ui inverted segment" id="logInForm">
            <div className="ui inverted form">
              <div className="one field">
                <div className="field">
                  <label id='firstName'>Name</label>
                  <input placeholder="Name" type="text" onChange={this.props.setLogInUser}/>
                </div>
             
              </div>
              <div className="inline field">
                <div className="ui checkbox"  id='checkBox' onClick={this.clickBox}>
                    {
                        !this.state.checked ? <input type="checkbox" tabindex="0" class="hidden"  checked/>:
                        <input type="checkbox" tabindex="0" class="hidden" />
                    }
       
                  <label id="solemnly">I solemnly swear <p></p><p></p>I'm up to no good.</label>
                </div>
              </div>
              <div className="ui submit button" id="subButton" onClick={this.props.setCurrentUser}>Log In</div>
            </div>
          </div>
          </div>
            // {/* <div>
            //     <form className="ui form">
            //         <div className="field">
            //             <label>Name: </label>
            //             <input type="text" name="first-name" placeholder="First Name" onChange={this.props.setLogInUser}/>
            //         </div>
            //         <button className="ui button" type="submit" onClick={this.props.setCurrentUser}>Log in</button>
            //     </form>
            // </div> */}
          
        
        );
    }
}