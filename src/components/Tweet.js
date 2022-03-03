import React from "react";

const Tweet = (props) => {
  const deleteTweet = () => {
    props.setTweets(props.tweets.filter((state) => state.id !== props.tweet.id));
  };
  return (
    <div className="tweet">
      <h3>{props.tweet.message}</h3>
      <button onClick={deleteTweet}>Delete</button>
      <button>Like</button>
    </div>
  );
};

export default Tweet;
