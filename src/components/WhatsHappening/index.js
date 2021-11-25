import { firestore } from "../../firebase/index";
import "./whatsHappening.css";
import { useState } from "react";
import { collections } from "../../firebase/firebaseConfig"





export default function WhatsHappening({user}) {

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
            userAvatar: user.photoURL,
            userName: user.displayName,
            userDate: naturalDate.getDate(),
            userMonth: naturalDate.getMonth()+1,
            date: Date.now(),
            fecha: new Date()
            
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
                <img className="profile-pic-wh" src={user.photoURL} alt="profileLogo" />
                <form className="wh-form">
                    <textarea placeholder="What's happening" cols="60" rows="9" value={tweet.tweet} onChange={handleTweetChange} ></textarea>
                    <div className="counting">
                        <div className="counting-in">{contador}</div>
                        <div className="counting-max">200 max.</div>
                    </div>
                    <button onClick={sendTweet} className="post-btn">POST</button>
                </form>
            </div>
        </div>
    )

}    