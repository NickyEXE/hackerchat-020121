import { NavLink } from 'react-router-dom'

function ChannelButton({id, name}){
  return <NavLink to={`/channels/${id}`}><div>{name}</div></NavLink>
}

export default ChannelButton;
