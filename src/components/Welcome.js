import { Link } from 'react-router-dom'

function Welcome({username}){

  const notLoggedIn = () => <>
      <h1>Welcome to Hackerchat</h1>
      <h3>Hackerchat is a place for Hackers and Slashers to Cut Loose and Cut Flesh.</h3>
      <p><Link to="/login">Login</Link> or <Link to="/signup">Signup</Link> to continue.</p>
    </>


  const loggedIn = () => <>
      <h1>Welcome to Hackerchat, {username}!</h1>
      <h3>Hackerchat is a place for Hackers and Slashers to Cut Loose and Cut Flesh.</h3>
      <p>Select a Channel from the Sidebar to get started!</p>
  </>

  return username ? loggedIn() : notLoggedIn()
}

export default Welcome;
