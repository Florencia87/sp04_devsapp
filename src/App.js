import './App.css';
import TopBar from "./components/TopBar"
import WhatsHappening from "./components/WhatsHappening"
import Feed from "./components/Feed"
import LogInPage from "./components/LogInPage"
import Profile from "./components/Profile"

import { collections } from "./firebase/firebaseConfig"
import { firestore, loginConGoogle, auth, logout } from "./firebase/index";

// import { DevsUnitedContext } from "../src/contexts/DevsUnitedContext";
import { useState, useEffect, useContext } from "react";


function App() {

  const [tweets, setTweets] = useState([]);
  // const [showApp, setShowApp] = useState(false);
  const [user, setUser ] = useState(null);


  useEffect(() => {
      const cancelSus = firestore
          .collection(collections.TWEETS) 
          .onSnapshot((snapshot) => {
              const tweetArray = snapshot.docs.map(doc => {
                return {
                  tweet : doc.data().tweet,
                  id : doc.id,
                  likes : doc.data().likes,
                  uid : doc.data().uid,
                  mail : doc.data().mail
                }
              })
              setTweets(tweetArray)
          });
        
        auth.onAuthStateChanged((user) => {
          setUser(user);
          console.log(user);
        })    
      
      return () => cancelSus();
  }, []);

  return (
    <div className="App-container">
      {user ? (
        <>
          <Profile user={user} />
          <TopBar/>
          <WhatsHappening
            user={user}
          />
          <div className="start-line"></div>
          <div className="feed-container">
              {tweets.map((tweet, index) => {
                return <Feed
                            key={index}
                            tweet={tweet} 
                            user={user}
                            tweets={tweets}
                            setTweets={setTweets}

                        />
           })}
      </div>  
        </>  
      ) : ( <LogInPage user={user} setUser={setUser} /> )}

        
    </div>
  );
}

export default App;
