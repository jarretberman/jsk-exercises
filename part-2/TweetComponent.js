function TweetComponent(props) {
    return (
    <div>
        <p>{props.username}</p>
        <p>{props.name}</p>
        <p>{props.date}</p>
        <p>{props.tweet}</p>
    </div>    
        )
        ;
  }