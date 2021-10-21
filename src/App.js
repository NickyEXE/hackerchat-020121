import './App.css';
import MessageList from './containers/MessageList'
import Welcome from "./components/Welcome"
import { Component } from 'react'
import ChannelList from './containers/ChannelList';
import { Switch, Route } from 'react-router-dom'

class App extends Component {


  render(){
    return <>
    <ChannelList/>
    <main>
      <Switch>
        <Route path="/channels/:id" component={MessageList}/>
        <Route exact path="/" component= {Welcome} />
      </Switch>
    </main>
    </>
  }
}

export default App;
