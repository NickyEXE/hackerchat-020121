import './App.css';
import MessageList from './containers/MessageList'
import Welcome from "./components/Welcome"
import Login from "./components/Login"
import Signup from "./components/Signup"
import { Component } from 'react'
import ChannelList from './containers/ChannelList';
import { Switch, Route } from 'react-router-dom'

class App extends Component {

  state = {
    user: {
      username: "",
      id: null
    }
  }

  setUser = ({user, token}) => {
    this.setState({ user })
    localStorage.token = token
  }

  componentDidMount(){
    localStorage.token && fetch("http://localhost:3000/autologin", {
      headers: {'Authorization': localStorage.token}
    })
    .then(res => res.json())
    .then(res => {
      if (res.user) {
        this.setUser(res)
      } else {
        localStorage.clear()
      }
    })
  }

  render(){
    const {id, username} = this.state.user
    return <>
    <ChannelList/>
    <main>
      <Switch>
        {/* if you care about the routeProps: */}
        {/* <Route path="/signup"  render={(routeProps) => <Signup {...routeProps} setUser={this.setUser}/>}/> */}
        <Route path="/signup"><Signup setUser={this.setUser}/></Route>
        <Route path="/login"><Login setUser={this.setUser}/></Route>
        <Route path="/channels/:id" render={(routeProps) => <MessageList {...routeProps} id={id} />}/>
        <Route exact path="/" render={() => <Welcome username={username}/>} />
      </Switch>
    </main>
    </>
  }
}

export default App;
