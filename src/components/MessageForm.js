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
        'Authorization': localStorage.token,
      },
      body: JSON.stringify({ message: this.state.message }),
    })
    this.setState({message: "", username: ""})
  }

  onChange = (e) => {
    this.setState({[e.target.name]: e.target.value})
  }

  render(){
    const {message} = this.state
    return (
      <form className="message-form" onSubmit={this.onSubmit}>
        <label>
          Message:
          <input type="text" name="message" onChange={this.onChange} value={message} />
        </label>
        <input type="submit" value="Submit" />
      </form>
  )}
}
