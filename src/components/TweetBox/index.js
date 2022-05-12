import { firestore } from "../../firebase/index";
import "./tweetBox.css";
import { useState } from "react";
import { collections } from "../../firebase/firebaseConfig"


export default function TweetBox({user}) {

    const [contador, setContador] = useState(0)
    
    // const [userTweet, setUserTweet] = useState()

    const [tweet, setTweet] = useState({
        tweet:"",
        uid:"",
        
    });

    const objectDate = new Date();
    const humanDate = objectDate.toLocaleDateString();
    const naturalDate = new Date (humanDate);
   


    const handleTweetChange = e => {
        setTweet({
            ...tweet,
            tweet: e.target.value,
            uid: user.uid,
            email: user.email,
            userAvatar: user.devAvatar,
            userName: user.devName,
            userDate: naturalDate.getDate(),
            userMonth: naturalDate.getMonth()+1,
            date: Date.now(),
            fecha: new Date(),
            userColor: user.devColor
            
        })
        // console.log(tweet) 
        setContador(contador + 1)

    }

    const sendTweet = (e) => {
        e.preventDefault();
        firestore.collection(collections.TWEETS).add(tweet);

        setTweet({
            tweet: "",
          })
        setContador(0)  
    };

    return (
        <div className="initial-post-area">
            <div className="pic-and-type">
                <img className="profile-pic-wh" src={user.devAvatar} alt="profileLogo" />
                <form className="wh-form">
                    <textarea placeholder="What's happening" cols="60" rows="9" value={tweet.tweet} onChange={handleTweetChange} ></textarea>
                    <div className="counting">
                        <div className="counting-in">{contador}</div>
                        <div className="counting-max">200 max.</div>
                    </div>
                    <button onClick={sendTweet} disabled={tweet.length === 0} className="post-btn">POST</button>
                </form>
            </div>
        </div>
    )

}    