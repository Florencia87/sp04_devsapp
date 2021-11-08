import { firestore, loginConGoogle, auth, logout } from "../../firebase/index";
import "./profile.css";


export default function Profile({user}) {
  



    return (
        <div className="useR">
            <div className="user-profile">
                <img className="user-profile-pic" src={user.photoURL} alt="" />
                <p>Hola {user.displayName}!</p>
                <button onClick={logout}>Log out</button>
            </div>
        </div>
    );
  }