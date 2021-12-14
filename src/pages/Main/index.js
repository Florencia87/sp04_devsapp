import LogIn from "../LogInPage/index";
import Home from "../Home/index";
import { DevsUnitedContext } from "../../contexts/DevsUnitedContext";
import { useContext } from "react";


export default function Main() {

  const { user } = useContext(DevsUnitedContext);


  return <> 
   {user 
        ? <Home user={user}/>
        : <LogIn />
    }
    </>
}    
