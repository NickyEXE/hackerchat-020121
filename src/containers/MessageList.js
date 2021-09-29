import Message from "../components/Message"
// import messages from "../assets/messages"

// import { Component } from 'react'
// class MessageList extends Component {

//   countToFour = () => [1,2,3,4].forEach(console.log)

//   render(){
//     {this.countToFour()}
//     return <h1>Hello!</h1>
//   }
// }

function MessageList(){
  const countToFour = () => [1,2,3,4].forEach(console.log)
  const messages = [
    {user: "Freddy Kreuger", message: "Starring in a new movie where I murder coders. Calling it Freddy vs. JSON", likes: 20},
    {user: "Jason Voorhees", message: "I don't get it.", likes: 10},
    {user: "Michael Myers", message: "I only kill cool teens.", likes: 5},
    {user: "Girl from the Ring", message: "Watch this cool video", likes: 12},
  ]
  return <ul>
    {messages.map((message, i) => <Message key={i} messageData={message} />)}
  </ul>
}

export default MessageList
