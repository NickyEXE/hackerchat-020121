import { Component } from 'react'
import ChannelButton from "../components/ChannelButton"
import { NavLink } from "react-router-dom"

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
      {this.state.channels.map(channel => <ChannelButton key={channel.id} {...channel} />)}
      <NavLink to="/"><div>Home</div></NavLink>
    </aside>
    )
  }


}
