import { Link } from "react-router-dom";
import { logout } from "../../firebase/index";
import "./profile.css";
import { useDB } from "../../contexts/DevsUnitedContext";
import { collections } from "../../firebase/firebaseConfig";
import { firestore } from "../../firebase/index";
import Posts from "../../components/Posts/index"
import { useState } from "react";


export default function Profile() {
   
    const { user, showPosts, setShowPosts, tweets } = useDB();
    console.log("este es el user", user)

    const [ posts, setPosts ] = useState ([]);
   
    const handleShowPosts = () => {
        getPosts(tweets)
        setShowPosts(() => !showPosts)  
    }
    
    const getPosts = async (tweets)=>{
        
        firestore.collection(collections.TWEETS)
        .get()
        .then(querySnapshot => {
            const documents = querySnapshot.docs.map(doc =>{
                 const data = doc.data()
                 const id = doc.id;
                 return { id, ...data };
                })
            // do something with documents
            console.log("este es el doc", {documents})
        
            let finalData = documents.filter((tweet)=>{
                if (tweet.uid === user.uid) return tweet;
            })
            console.log("Data filtrada",finalData)
            setPosts(finalData)
          })
      }


   
    return (
        <div className="user">
            <div className="profile-nav">
                <Link to ="./">
                    <div className="left-nav">
                        <img className="back" src="images/back.svg" alt="go back" />
                        <p>{user.devName}</p>
                    </div>
                </Link>
                <div className="right-nav">  
                    <button onClick={logout}>
                        <img className="logOut" src="images/logout.svg" alt="log out" />
                    </button> 
                </div>       
            </div>
            <div className="content">
                <button onClick={handleShowPosts} className="posts">
                  { showPosts ? 'LIKES' : 'POSTS' }  
                </button>
                <div className="post-container">
                  {posts.map((post, index) => {
                    return <Posts
                                key={index}
                                post={post}
                                setPosts={setPosts}
                              
                            />
                })}
                  </div>
             
            </div>
        </div>
    );
  }