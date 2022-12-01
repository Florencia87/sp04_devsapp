import Home from "../Home/index";
import Register from "../../pages/Register/index";
import Profile from "../Profile/index";
import { useDB } from "../../contexts/DevsUnitedContext";
import { Route } from "react-router-dom";


export default function Main() {

  const { devUser, user, setRegistered, registered } = useDB();

  console.log("pase por main")

  console.log(user.devName, "este es el devName desde Main") 
  
  console.log("You are Registered", registered)
  
  return (
     registered ?
          (<main className="main">
            <Route exact path="/profile" component={Profile} />
            <Route exact path="/" component={Home} />
          </main>
          ) :
          <Register />
      
    );
}    