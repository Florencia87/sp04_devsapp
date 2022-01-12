import { Link } from "react-router-dom";
import { logout } from "../../firebase/index";
import "./profile.css";
import { useDB } from "../../contexts/DevsUnitedContext";
import Feed from "../../components/Feed";


export default function Profile() {
   
    const { user, showPosts, setShowPosts, tweets } = useDB();
    console.log("este es el user", user)

    const handleShowPosts = () => {
        setShowPosts(() => !showPosts)
    }


    return (
        <div className="user">
            <div className="user-profile">
                <Link to ="./">
                    <img className="user-profile-pic" src={user.photoURL} alt="" />
                </Link>
                <p>Hola {user.displayName}!</p>
                <Link to ="./">
                    <button onClick={logout}>Log out</button>
                </Link>
            </div>
            <div className="content">
                <button onClick={handleShowPosts} className="posts">
                  { showPosts ? 'POSTS' : 'LIKES' }
                </button>
                {/* <ol>
                    {tweets
                        .filter((tweet) => {
                            if (showPosts === true && tweet.uid === user.uid) return tweet;
                            return tweet.likes === true 
                        })
                        .map((tweet) => {
                            return <Feed
                                        tweet={tweet}
                                    /> 
                        })
                    }       
                </ol> */}
            </div>
        </div>
    );
  }