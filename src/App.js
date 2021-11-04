import './App.css';
import TopBar from "./components/TopBar"
import WhatsHappening from "./components/WhatsHappening"
import Feed from "./components/Feed"

import { firestore } from "./firebase/index";
import { collections } from "./firebase/firebaseConfig"

// import { DevsUnitedContext } from "../src/contexts/DevsUnitedContext";
import { useState, useEffect } from "react";


function App() {

  const [tweets, setTweets] = useState([]);


  useEffect(() => {
      firestore
          .collection(collections.TWEETS)
          .get()
          .then((snapshot) => {
              const tweetArray = snapshot.docs.map(doc => {
                return {
                  tweet : doc.data().tweet,
                  id : doc.data().id,
                }
              })

    
              setTweets(tweetArray)
              })
              
          }, []);

  return (
    <div className="App-container">
      <TopBar/>
      <WhatsHappening
        tweets={tweets}
        setTweets={setTweets}
      />
      <div className="start-line"></div>
      <div className="feed-container">
          {tweets.map((tweet, index) => {
            return <Feed
                        key={index}
                        tweet={tweet} 
                        
                    />
          })}
      </div>    
    </div>
  );
}

export default App;
