import React, { Fragment } from 'react';
import './App.css';
import Main from './components/Main'
import { BrowserRouter as Router, Route, Redirect } from 'react-router-dom';
import CharacterContainer from './containers/characterContainer';
import SpellsContainer from './containers/spellsContainer';
import Hat from './components/Hat'
import Welcome from './components/Welcome'
import Login from './components/Login'
import SignUp from './components/SignUp'
import FavoritesContainer from './containers/FavoritesContainer';


class App extends React.Component{

  constructor(){
    super()
    this.state={
      characters:[],
      spells:[],
      currentUser: false,
      users:[],
      logInUser: null,
      validName: null,
      search:""
    }

  }

  setCurrentUser = (e) =>{
  
    e.preventDefault()
  
    let findUser = this.state.users.find(user => user.name === this.state.logInUser)

    if(findUser !== undefined){
      this.setState({
        currentUser: true
      })
    }else{
      window.alert("Wrong username or password")
    }
  }

  setCurrentUserSignUp = () =>{
    this.setState({
      currentUser: true
    })
  }

  setLogInUser = (e) => {
    
    this.setState({
      logInUser: e.currentTarget.value

    })
  }

  signUp = (e) => {

    if(this.state.users.find(user => user.name === this.state.logInUser) === undefined){

      this.setState({
        validName:true
      })
      }else{
        window.alert('username already taken')
      }
   
  }

  searchedCharacter=()=>{
    return this.state.characters.filter(character => character.name.toLowerCase().includes(this.state.search))
  }

  serchCharacter=(e)=>{
    this.setState({
      search : e.target.value
    })
  }
  

  componentDidMount(){

    fetch("http://localhost:3000/characters")
    .then(res=>res.json())
    .then(characters=> {
      this.setState({
        characters
      })
    })

    fetch("http://localhost:3000/spells")
    .then(res => res.json())
    .then(spells=>{
      this.setState({
        spells
      })
    })

    fetch("http://localhost:3000/users")
    .then(res => res.json())
    .then(users=>{
      this.setState({
        users
      })
    })

  }

  render(){

  return (

  <Fragment>
    <Router>
      <Route exact path='/'           component={Welcome}/>
      <Route exact path ='/favorites' component={FavoritesContainer}/>

      <Route exact path='/hat'        render={()=> this.state.validName   ? <Hat setCurrentUser={this.setCurrentUserSignUp} userName={this.state.logInUser}/>  : <Redirect to ='signup'/>}/>
      <Route exact path='/main'       render={()=> this.state.currentUser ? <Main/> : <Redirect to ="/login"/>}/> 
      <Route exact path='/login'      render={()=> this.state.currentUser ? <Redirect to ='/main'/> : <Login setCurrentUser={this.setCurrentUser} setLogInUser={this.setLogInUser}/>} /> 
      <Route exact path='/signup'     render={()=> this.state.currentUser ? <Redirect to ='/main'/> : <SignUp signUp={this.signUp} setLogInUser={this.setLogInUser} user={this.state.logInUser}/> } />
      <Route exact path='/characters' render={()=> this.state.currentUser ? <CharacterContainer serchCharacter={this.serchCharacter} searchedCharacter={this.searchedCharacter()} /> :  <Redirect to ="/login"/>} /> 
      <Route exact path='/spells'     render={()=> this.state.currentUser ? <SpellsContainer spells={this.state.spells} /> : <Redirect to ="/login"/>} />
    </Router>
  </Fragment>

  )};
}

export default App;
