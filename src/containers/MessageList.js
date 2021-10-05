import Message from "../components/Message"
import { Component } from "react"

// import { Component } from 'react'
// class MessageList extends Component {

//   render(){
//     console.log(this.props)
//     return <h1>Hello!</h1>
//   }
// }

class MessageList extends Component {
  state = {
    messages: [
      {user: "Freddy Kreuger", message: "Starring in a new movie where I murder coders. Calling it Freddy vs. JSON"},
      {user: "Jason Voorhees", message: "I don't get it."},
      {user: "Michael Myers", message: "I only kill cool teens."},
      {user: "Girl from the Ring", message: "Watch this cool video"},
    ]
  }

  lolFreddy = () => {
    this.setState({messages: [...this.state.messages, {user: "Freddy Kreuger", message: "lol"}]})
  }

  // <Message messageData={{user: "Freddy Kreuger", message: "Starring in a new movie where I murder coders. Calling it Freddy vs. JSON"}}/>
  render(){
  return <ol>
      {this.state.messages.map((message, i) => <Message key={i} messageData={message} />)}
      <button onClick={this.lolFreddy}>Make Freddy Say Lol</button>
    </ol>
  }
}

export default MessageList
