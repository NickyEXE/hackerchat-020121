import './App.css';
import MessageList from './containers/MessageList'

function App() {
  return <>
  <h1>Welcome to Hackerchat</h1>
  <h3>A place for Hackers and Slashers to Cut Loose and Cut Flesh</h3>
  <MessageList thisIsAProp={12}/>
  </>
}

export default App;
