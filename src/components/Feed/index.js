import { firestore } from "../../firebase";
import firebase from "firebase/app";
import "./feed.css";
import { collections } from "../../firebase/firebaseConfig"
import { useEffect, useState } from "react";
import {  useDB } from "../../contexts/DevsUnitedContext";



export default function Feed({tweet}) {
    const { user, devUser, setUserId, userId, setUser } = useDB();

    const [isLiked, setIsLiked] = useState(false);

    const handleLike = async (id, likes) => {
                        
        //console.log(likes);
        setIsLiked(!isLiked);
        if (!likes) likes = 0;

        const newLikes = isLiked ? likes - 1 : likes + 1;
        firestore.doc(`${collections.TWEETS}/${id}`).update({likes: newLikes})

        let favoriteTweet = firestore.doc(`${collections.TWEETS}/${id}`)

        //console.log(favoriteTweet.id, "aqui figura el ID del Tweet")
        const favoriteId = favoriteTweet.id

        try {
            const fieldValueRef = firebase.firestore.FieldValue;
            console.log("Feed.handleLike.try -> user: ", user);
            console.log("Feed.handleLike.try -> user.favorites: ", user.favorites);

            await firestore
                .collection(collections.DEVUSER)
                .doc(userId)
                .update({
                    ...user,
                    favorites: isLiked
                    // devId: userId
                    ? fieldValueRef.arrayRemove(favoriteId)
                    : fieldValueRef.arrayUnion(favoriteId),
                });
                
        }catch (error) {
            console.log("Error getting documents: ", error);
        }   
        
        firestore.collection(collections.DEVUSER)
            .where("uid", "==", user.uid)
            .get()
            .then( (querySnapshot) => {
                querySnapshot.forEach((doc) => {
                    setUser(doc.data())
                })
            })
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
            {/* {getUserId()} */}
            <div className="feed-component">
                <img className="profile-pic-feed" src={tweet.userAvatar} alt="profileLogo" />
                <div className="postData">
                    <div className="info">
                        <p className="username"
                           style={{ backgroundColor: tweet.userColor }}
                        >{tweet.name || tweet.userName}</p> 
                        <p className="postDate">{tweet.userDate}<> de </>{months[tweet.userMonth]}</p>           
                    </div>
                    <div className="post">{tweet.tweet}</div>
                    <div className="graphs">
                        <span className="likes" onClick={() => handleLike(tweet.id, tweet.likes, user.uid)}>
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


// const { setSelectColor, selectColor, colors, devUser } = useDB();

// // const [background, setBackground] = useState(setSelectColor(color))


// const [isLiked, setIsLiked] = useState(false)

// const handleLike = (id, likes) => {
//     console.log(likes);
//     setIsLiked(!isLiked);
//     if (!likes) likes = 0;

//     const newLikes = isLiked ? likes - 1 : likes + 1;
//     firestore.doc(`${collections.TWEETS}/${id}`).update({likes: newLikes});
// };  

// const handleDeleteTweet = (id) => {
//     firestore.doc(`${collections.TWEETS}/${id}`).delete()
// }

// const months = [ 
//     "Diciembre",   
//     "Enero",
//     "Febrero",
//     "Marzo",
//     "Abril",
//     "Mayo",
//     "Junio",
//     "Julio",
//     "Agosto",
//     "Septiembre",
//     "Octubre",
//     "Noviembre",
//     "Diciembre"
   
//   ];




// return (
//     <div className="posts-feed">
//         <div className="feed-component">
//             <img className="profile-pic-feed" src={tweet.userAvatar} alt="profileLogo" />
//             <div className="postData">
//                 <div className="info">
//                     <p className="username" style={{ backgroundColor: devUser.color}}>{tweet.name || tweet.userName}</p> 
//                     <p className="postDate">{tweet.userDate}<> de </>{months[tweet.userMonth]}</p>           
//                 </div>
//                 <div className="post">{tweet.tweet}</div>
//                 <div className="graphs">
//                     <span className="likes" onClick={() => handleLike(tweet.id, tweet.likes)}>
//                         {isLiked ? (
//                         <img className="tinyLike" height="13px" src="./images/like.svg" alt="likesIcon" />  
//                         ) : (
//                         <img className="tinyLike" height="13px" src="./images/emptyheart.svg" alt="likesIcon" />      
//                         )}
//                         {tweet.uid !== user.uid && (
//                         <span className="countLikes">{tweet.likes ? tweet.likes : 0}</span> )} 
//                     </span>
//                     {tweet.uid === user.uid && (
//                     <img className="delete" onClick={() => handleDeleteTweet(tweet.id)} height="20px" src="./images/delete.svg" alt="delete" />)}
//                 </div>
//             </div>
//         </div>
//         <div className="end-line"></div>
//     </div>
// )