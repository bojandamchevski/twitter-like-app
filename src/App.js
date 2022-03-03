import "./App.css";
import TweetList from "./components/TweetList";
import CreateTweet from "./components/CreateTweet";
import React, { useEffect, useState } from "react";

function App() {
  const [textInput, setTextInput] = useState("");
  const [tweets, setTweets] = useState([]);
  useEffect(()=>{
    console.log("run");
  },[tweets])
  return (
    <div>
      <CreateTweet
        textInput={textInput}
        setTextInput={setTextInput}
        tweets={tweets}
        setTweets={setTweets}
      />
      <TweetList tweets={tweets} setTweets={setTweets} />
    </div>
  );
}

export default App;
