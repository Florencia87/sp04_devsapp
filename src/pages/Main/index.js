import LogIn from "../LogInPage/index";
import Home from "../Home/index";
import Register from "../../pages/Register/index";
import { useDB } from "../../contexts/DevsUnitedContext";


export default function Main() {

  const { user, devUser } = useDB();


  return <> 
   {devUser
        ? <Home user={user}/>
        : <Register />
    }
    </>
}    
