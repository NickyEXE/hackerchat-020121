import Message from "../components/Message"

// Example of hooks:
// import { useState } from 'react'


// import { Component } from 'react'
// class MessageList extends Component {

//   render(){
//     console.log(this.props)
//     return <h1>Hello!</h1>
//   }
// }

function MessageList(props){

  // Example of Hooks
  // const [counter, setCounter] = useState(0)
  // const handleClick = () => setCounter(counter + 1)

  return <ol>
      {/* hooks example: <button onClick={handleClick}>{counter}</button> */}
      {props.messages.map((message) => <Message key={message.id} messageData={message} />)}
      <button onClick={props.lolFreddy}>Make Freddy Say Lol</button>
    </ol>
}

export default MessageList
