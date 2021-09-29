function Message(props){
  const { user, message, likes } = props.messageData
  return (<li>
    <strong>{user}</strong>:
    <span>{message} </span>
    <button> {likes} </button>
  </li>)
}

// import { Component } from 'react'
// class Message extends Component {


//   render(){
//     console.log(this.props)
//     return (<li>
//       <strong>{this.props.messageData.user}</strong>:
//       <span>{this.props.messageData.message} </span>
//       <button> {this.props.messageData.likes} </button>
//     </li>)
//   }

// }

export default Message
