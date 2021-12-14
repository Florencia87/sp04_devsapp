import { createContext, useState} from "react";
import { auth } from "../firebase/index";


export const DevsUnitedContext = createContext();

export const DevsUnitedProvider = (props) => {

    const [ user, setUser ] = useState(null);

    const [ tweets, setTweets ] = useState([]);
        
    const [ authenticated, setAuthenticated ] = useState(false);


    // auth().onAuthStateChanged((user) => {
    // setUser(user);
    // const isAuthenticated = user ? true : false; 
    // setAuthenticated(isAuthenticated);   
    // });
 


    return (
        <DevsUnitedContext.Provider value={{ user, setUser, tweets, setTweets, authenticated, setAuthenticated }}>
            {props.children}
        </DevsUnitedContext.Provider>    
    );
};