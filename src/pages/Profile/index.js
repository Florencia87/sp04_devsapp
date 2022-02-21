import { Link } from "react-router-dom";
import { logout } from "../../firebase/index";
import "./profile.css";
import { useDB } from "../../contexts/DevsUnitedContext";
import Feed from "../../components/Feed";
import Users from "../../components/Users";


export default function Profile() {
   
    const { user, showPosts, setShowPosts } = useDB();
    console.log("este es el user", user)

    const handleShowPosts = () => {
        setShowPosts(() => !showPosts)
    }


    return (
        <div className="user">
            <div className="user-profile">
                <Link to ="./">
                    <img className="user-profile-pic" src={user.devAvatar} alt="" />
                </Link>
                <p>Hola {user.devName}!</p>
                <Link to ="/login">
                    <button onClick={logout}>Log out</button>
                </Link>
            </div>
            <div className="content">
                <button onClick={handleShowPosts} className="posts">
                  { showPosts ? 'POSTS' : 'LIKES' }
                </button>
                <Users />
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