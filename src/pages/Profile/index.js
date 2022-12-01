import { Link } from "react-router-dom";
import { loginConGoogle, logout } from "../../firebase/index";
import "./profile.css";
import { useDB } from "../../contexts/DevsUnitedContext";
import { collections } from "../../firebase/firebaseConfig";
import { firestore } from "../../firebase/index";
import Posts from "../../components/Posts/index"
import { useEffect, useState } from "react";
import LogIn from "../LogInPage/index"


export default function Profile() {

    const { user, setUser, showPosts, setShowPosts, tweets, setUserId, setDevUser, userId } = useDB();
    console.log("este es el user", user)
    
    const [ posts, setPosts ] = useState ([]);
    const [ likes, setLikes ] = useState ([]);
   

    const handleShowPosts = () => {
        getPosts(tweets)
        console.log(tweets, "estos son los tweets")
        getLikes(tweets)
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
            console.log("Data filtrada de Posts",finalData)
            setPosts(finalData)
          })
      }

    const getLikes = async (tweets)=>{
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
       
           let finalDataLikes = documents.filter((tweet)=>{
               if (tweet.id === user.favorites[1] ) return tweet;
               console.log(tweet.id)
               console.log(user.favorites)
           })
           console.log("Data filtrada de Likes",finalDataLikes)
        //    console.log(.favorites, "estos son los favoritos del usuario")
           setLikes(finalDataLikes)
         })
     }

    // const ref = doc(db, "devsUsers", userId) 

    /* que necesito que haga:

    desde la coleccion de TWEETS, haga unfiltro de tweets donde el id del tweet sea ===
    a alguno de los elementos contenidos en el array de favorites, para eso si o si necesito
    recorrer el array de favorites

    */
    
    return (

        user ? 
        (<div className="user">
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

            { showPosts ?
                <div className="post-container">
                    {
                        posts.map((post, index) => {
                            return <Posts
                                        key={index}
                                        post={post}
                                        setPosts={setPosts}
                                    
                                    />
                        })
                    }
                </div>
              : 
                <div className="likes-container">
                    {/* {
                        likes.map((like, index) => {
                            return <Posts
                                        key={index}
                                        like={like}
                                        setLikes={setLikes}
                                    
                                    />
                            })
                    } */}
              </div>
            }
        </div>
    </div>):(
        <LogIn />
    )
        
    );
  }