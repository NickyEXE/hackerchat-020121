import './App.css';
import MessageList from './containers/MessageList'
import MessageForm from './components/MessageForm'
import { Component } from 'react'
import { v4 as uuidv4 } from 'uuid';

class App extends Component {

  state = {
    messages: [
      {user: "Freddy Kreuger", message: "Starring in a new movie where I murder coders. Calling it Freddy vs. JSON", id: uuidv4()},
      {user: "Jason Voorhees", message: "I don't get it.", id: uuidv4()},
      {user: "Michael Myers", message: "I only kill cool teens.", id: uuidv4()},
      {user: "Girl from the Ring", message: "Watch this cool video", id: uuidv4()},
    ]
  }

  lolFreddy = () => {
    this.setState({messages: [...this.state.messages, {user: "Freddy Kreuger", message: "lol", id: uuidv4()}]})
  }

  addMessage = (newMessage) => {
    this.setState({
      messages: [
        ...this.state.messages,
        {...newMessage, id: uuidv4()}
      ]
    })
  }

  render(){
    return <main>
      <h1>Welcome to Hackerchat</h1>
      <h3>A place for Hackers and Slashers to Cut Loose and Cut Flesh</h3>
      <MessageList messages={ this.state.messages } lolFreddy={ this.lolFreddy } />
      <MessageForm addMessage={ this.addMessage } />
    </main>
  }
}

export default App;
