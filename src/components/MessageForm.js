import { Component } from 'react';

export default class MessageForm extends Component {

  state = {
    username: "",
    message: ""
  }

  onSubmit = (e) => {
    e.preventDefault()
    fetch(`http://localhost:3000/channels/${this.props.channelId}/messages`, {
      method: 'POST', // or 'PUT'
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(this.state),
    })
    this.setState({message: "", username: ""})
  }

  onChange = (e) => {
    this.setState({[e.target.name]: e.target.value})
  }

  render(){
    const {message, username} = this.state
    return (
      <form className="message-form" onSubmit={this.onSubmit}>
        <label>
          Username:
          <input type="text" name="username" onChange={this.onChange} value={username} />
        </label>
        <br/>
        <label>
          Message:
          <input type="text" name="message" onChange={this.onChange} value={message} />
        </label>
        <input type="submit" value="Submit" />
      </form>
  )}
}
