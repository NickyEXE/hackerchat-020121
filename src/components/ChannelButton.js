function ChannelButton({changeChannel, id, selectedId, name}){
  return <div className={(id === selectedId) ? "selected" : ""} onClick={() => changeChannel(id)}>{name}</div>
}

export default ChannelButton;
