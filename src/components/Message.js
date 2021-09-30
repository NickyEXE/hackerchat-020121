// function Message(props){
//   const { user, message } = props.messageData

//   function onClick(){
//     console.log(props.messageData.message)
//   }

//   return (<li>
//     <strong>{user}</strong>:&nbsp;
//     <span>{message} </span>
//     <button onClick={onClick}> 0 Likes </button>
//   </li>)
// }

import { Component } from 'react'
import LikeButton from './LikeButton'
class Message extends Component {

  state = {
    likes: 42
  }

  onClick = () => {
    this.setState({likes: this.state.likes + 1})
  }

  render(){
    const { user, message } = this.props.messageData
    return (
    <li>
      <strong>{user}</strong>:&nbsp;
      <span>{message}</span>&nbsp;
      <LikeButton likes={this.state.likes} onLikeClick={this.onClick} />
    </li>)
  }

}

export default Message
