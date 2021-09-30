function LikeButton(props){
  return <button onClick={props.onLikeClick}> {props.likes} Likes </button>
}

export default LikeButton;
