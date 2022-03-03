import React from "react";
import Tweet from "./Tweet";

const TweetList = (props) => {
  return (
    <div className="tweet-list">
      {props.tweets.map((tweet) => (
        <Tweet
          tweet={tweet}
          setTweets={props.setTweets}
          tweets={props.tweets}
          key={tweet.id}
        />
      ))}
    </div>
  );
};

export default TweetList;
