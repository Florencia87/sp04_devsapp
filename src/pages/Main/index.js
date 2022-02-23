import Home from "../Home/index";
import Register from "../../pages/Register/index";
import { useDB } from "../../contexts/DevsUnitedContext";


export default function Main() {

  const { devUser, user } = useDB();

  console.log("pase por main")

  console.log(user.devName, "este es el devName desde Main")
  console.log(devUser.devName, "este es el nombre del devUser")
 

  const getStatus = () => {
    if (devUser.devName != undefined) {
      return <Home />
    } else if (user.devName === undefined) {
      return <Register/>
    }

  }
  
  return <> 
     {getStatus()}
    
    </>
}    
