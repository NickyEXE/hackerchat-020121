import { Component } from 'react';

export default class MessageForm extends Component {

  state = {
    user: "",
    message: ""
  }

  onSubmit = (e) => {
    e.preventDefault()
    this.props.addMessage(this.state)
    this.setState({message: "", user: ""})
  }

  onChange = (e) => {
    this.setState({[e.target.name]: e.target.value})
  }

  render(){
    const {message, user} = this.state
    return (
      <form className="message-form" onSubmit={this.onSubmit}>
        <label>
          User:
          <input type="text" name="user" onChange={this.onChange} value={user} />
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
