import { Component } from 'react'
import ChannelButton from "../components/ChannelButton"

export default class ChannelList extends Component {

  state = {
    channels: []
  }

  componentDidMount(){
    fetch("http://localhost:3000/channels")
    .then(res=>res.json())
    .then(channels => this.setState({channels}))
  }

  render(){
    return (
    <aside>
      {this.state.channels.map(channel => <ChannelButton key={channel.id} selectedId={this.props.channelId} {...channel} changeChannel={this.props.changeChannel} />)}
      <div onClick={() => this.props.changeChannel(null)}>Home</div>
    </aside>
    )
  }


}
