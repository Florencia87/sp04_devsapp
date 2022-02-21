import { firestore } from "../../firebase";
import "./feed.css";
import { collections } from "../../firebase/firebaseConfig"
import { useState } from "react";
import { useDB } from "../../contexts/DevsUnitedContext";



export default function Feed({tweet, user}) {

    const { devUser } = useDB();

    const [isLiked, setIsLiked] = useState(false)

    const handleLike = (id, likes) => {
        console.log(likes);
        setIsLiked(!isLiked);
        if (!likes) likes = 0;

        const newLikes = isLiked ? likes - 1 : likes + 1;
        firestore.doc(`${collections.TWEETS}/${id}`).update({likes: newLikes});
    };  

    const handleDeleteTweet = (id) => {
        firestore.doc(`${collections.TWEETS}/${id}`).delete()
    }

    const months = [ 
        "Diciembre",   
        "Enero",
        "Febrero",
        "Marzo",
        "Abril",
        "Mayo",
        "Junio",
        "Julio",
        "Agosto",
        "Septiembre",
        "Octubre",
        "Noviembre",
        "Diciembre"
       
      ];


    return (
        <div className="posts-feed">
            <div className="feed-component">
                <img className="profile-pic-feed" src={tweet.userAvatar} alt="profileLogo" />
                <div className="postData">
                    <div className="info">
                        <p className="username">{tweet.name || tweet.userName}</p> 
                        <p className="postDate">{tweet.userDate}<> de </>{months[tweet.userMonth]}</p>           
                    </div>
                    <div className="post">{tweet.tweet}</div>
                    <div className="graphs">
                        <span className="likes" onClick={() => handleLike(tweet.id, tweet.likes)}>
                            {isLiked ? (
                            <img className="tinyLike" height="13px" src="./images/like.svg" alt="likesIcon" />  
                            ) : (
                            <img className="tinyLike" height="13px" src="./images/emptyheart.svg" alt="likesIcon" />      
                            )}
                            {tweet.uid !== user.uid && (
                            <span className="countLikes">{tweet.likes ? tweet.likes : 0}</span> )} 
                        </span>
                        {tweet.uid === user.uid && (
                        <img className="delete" onClick={() => handleDeleteTweet(tweet.id)} height="20px" src="./images/delete.svg" alt="delete" />)}
                    </div>
                </div>
            </div>
            <div className="end-line"></div>
        </div>
    )

}