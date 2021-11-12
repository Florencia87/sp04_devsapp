import { firestore } from "../../firebase/index";
import "./whatsHappening.css";
import { useState } from "react";
import { collections } from "../../firebase/firebaseConfig"





export default function WhatsHappening({user}) {

    const [tweet, setTweet] = useState({
        tweet:"",
        uid:"",
        
    });

    const handleTweetChange = e => {
        setTweet({
            ...tweet,
            tweet: e.target.value,
            uid: user.uid,
            email: user.email,
            date: new Date(e.target.value).valueOf()
        })
        console.log(tweet) 
    }

    const sendTweet = (e) => {
        e.preventDefault();
        firestore.collection(collections.TWEETS).add(tweet);

        setTweet({
            tweet: "",
          })
    };

    return (
        <div className="initial-post-area">
            <div className="pic-and-type">
                <img className="profile-pic-wh" src="./images/profilePic.svg" alt="profileLogo" />
                <form className="wh-form">
                    <textarea placeholder="What's happening" cols="60" rows="9" value={tweet.tweet} onChange={handleTweetChange} ></textarea>
                    <div className="counting">
                        <div className="counting-in">17</div>
                        <div className="counting-max">200 max.</div>
                    </div>
                    <button onClick={sendTweet} className="post-btn">POST</button>
                </form>
            </div>
        </div>
    )

}    