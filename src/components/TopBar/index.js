import "./topBar.css";
import { Link } from "react-router-dom";

export default function TopBar({user}) {

    


    return (
        <div className="bar">
            <div className="logo-bar">
                <Link to ="./profile"><img className="user-profile-pic" src={ user.devAvatar } alt={ user.displayName} /></Link>  
                <img className="isotipo" src="./images/Isotipo.svg" alt="isotipo" /> 
                <img className="logotipo" src="./images/Logotipo.svg" alt="Logotipo" />    
            </div>
        </div>
    )

}