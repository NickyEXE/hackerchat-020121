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

  setUser = (user) => {
    this.setState({ user })
  }

  render(){
    return <>
    <ChannelList/>
    <main>
      <Switch>
        {/* if you care about the routeProps: */}
        {/* <Route path="/signup"  render={(routeProps) => <Signup {...routeProps} setUser={this.setUser}/>}/> */}
        <Route path="/signup"><Signup setUser={this.setUser}/></Route>
        <Route path="/login"><Login setUser={this.setUser}/></Route>
        <Route path="/channels/:id" component={MessageList}/>
        <Route exact path="/" component= {Welcome} />
      </Switch>
    </main>
    </>
  }
}

export default App;
