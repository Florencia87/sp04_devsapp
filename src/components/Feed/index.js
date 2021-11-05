import { firestore } from "../../firebase";
import "./feed.css";
import { collections } from "../../firebase/firebaseConfig"


export default function Feed({tweet}) {

    const handleLike = (id, likes) => {
        console.log(likes);
        if (!likes) likes = 0;
        firestore.doc(`${collections.TWEETS}/${id}`).update({likes: likes + 1});
    };


    return (
        <div className="posts-feed">
            <div className="feed-component">
                <img className="profile-pic-feed" src="./images/profilePic.svg" alt="profileLogo" />
                <div className="postData">
                    <div className="info">
                        <p className="username">USERNAME</p> 
                        <p className="postDate">5 Jun</p>           
                    </div>
                    <div className="post">{tweet.tweet}</div>
                    <span className="likes" 
                        onClick={() => handleLike(tweet.id, tweet.likes)} 
                    >
                      <img className="tinyLike" height="13px" src="./like.svg" alt="likesIcon" />  
                      <span>{tweet.likes ? tweet.likes : 0}</span>
                    </span>
                </div>
            </div>
            <div className="end-line"></div>
        </div>
    )

}