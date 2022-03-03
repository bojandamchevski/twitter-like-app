import React from "react";
import { v4 as uuidv4 } from "uuid";

const CreateTweet = (props) => {
  const userInputHandler = (e) => {
    props.setTextInput(e.target.value);
  };

  const submitTweetHandler = (e) => {
    e.preventDefault();
    props.setTweets([
      ...props.tweets,
      { message: props.textInput, id: uuidv4() },
    ]);
    props.setTextInput("");
  };

  return (
    <form onSubmit={submitTweetHandler}>
      <textarea
        cols="30"
        rows="5"
        value={props.textInput}
        onChange={userInputHandler}
      ></textarea>
      <button>Submit</button>
    </form>
  );
};

export default CreateTweet;
