import { useState } from 'react'
import { NavLink } from 'react-router-dom'

function Signup(props){
  const [user, setUser] = useState({username: "", password: "", passwordConfirmation: ""})

  const handleChange = (e) => setUser({...user, [e.target.name]: e.target.value})

  const handleSubmit = (e) => {
    e.preventDefault()
    console.log("do something with me!", user)
  }

  return (
    <>
    <form onSubmit={handleSubmit}>
      <label>
        Username:
        <input type="text" name="username" value={user.username} onChange={handleChange} />
      </label>
      <br/>
      <label>
        Password:
        <input type="text" name="password" value={user.password} onChange={handleChange} />
      </label>
      <br/>
      <label>
        Password Confirmation:
        <input type="text" className={user.password === user.passwordConfirmation ? "match" : "no-match"} name="passwordConfirmation" value={user.passwordConfirmation} onChange={handleChange} />
      </label>
      <br/>
      <input type="submit" value="Submit" />
    </form>
    <br/>
    <NavLink to="/Login">Or Login!</NavLink>
    </>
  )
}

export default Signup;
