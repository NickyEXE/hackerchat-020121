import './App.css';
import MessageList from './containers/MessageList'
import MessageForm from './components/MessageForm'
import Welcome from "./components/Welcome"
import { Component } from 'react'
import ChannelList from './containers/ChannelList';
class App extends Component {

  state = {
    channelId: null,
  }

  changeChannel = (id) => this.setState({channelId: id})

  render(){
    const { changeChannel, state: { channelId } } = this
    return <>
    <ChannelList channelId={channelId} changeChannel={changeChannel}/>
    <main>
      {channelId ? <MessageList channelId={channelId} /> : <Welcome />}
      {channelId && <MessageForm channelId={channelId} />}
    </main>
    </>
  }
}

export default App;
