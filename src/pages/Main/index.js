import LogIn from "../LogInPage/index";
import Home from "../Home/index";
import { useDB } from "../../contexts/DevsUnitedContext";


export default function Main() {

  const { user } = useDB();


  return <> 
   {user 
        ? <Home user={user}/>
        : <LogIn />
    }
    </>
}    
