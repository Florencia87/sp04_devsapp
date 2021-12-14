import { Link } from "react-router-dom";
import { logout } from "../../firebase/index";
import "./profile.css";


export default function Profile({user}) {
   
    

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
            {/* <div>
                <Link to="/profile/posts">POSTS</Link>
                <Link to="/profile/favorites">FAVORITES</Link>
            </div> */}
        </div>
    );
  }