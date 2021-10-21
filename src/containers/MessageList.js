import Message from "../components/Message"
import MessageForm from "../components/MessageForm"

// Example of hooks:
// import { useState } from 'react'


import { Component } from 'react'
// class MessageList extends Component {

//   render(){
//     console.log(this.props)
//     return <h1>Hello!</h1>
//   }
// }

class MessageList extends Component {

  state = {
    messages: [],
    name: "",
    id: null,
    interval: null,
  }

  getMessages = () => {
    fetch(`http://localhost:3000/channels/${this.props.match.params.id}`)
    .then(res => res.json())
    .then(channel => this.setState({...channel}))
  }

  componentDidMount(){
    this.getMessages()
    this.setState({interval: setInterval(this.getMessages, 3000)})
  }

  componentDidUpdate(prevProps){
    if (prevProps.match.params.id !== this.props.match.params.id){
     this.getMessages()
    }
  }

  componentWillUnmount(){
    clearInterval(this.state.interval)
  }

  // Example of Hooks
  // const [counter, setCounter] = useState(0)
  // const handleClick = () => setCounter(counter + 1)
  render(){
    const { messages, name } = this.state
    return <>
      <h1>{name}</h1>
      <ol>
        {/* hooks example: <button onClick={handleClick}>{counter}</button> */}
        {messages.map((message) => <Message key={message.id} messageData={message} />)}
      </ol>
      <MessageForm channelId={ this.props.match.params.id } />
    </>
  }
}

export default MessageList
