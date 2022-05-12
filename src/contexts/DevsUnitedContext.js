import React, { createContext, useContext, useState} from "react";

export const colors = [
    { name: "Rojo", hex: "#ff0000" },
    { name: "Verde", hex: "#00ff00" },
    { name: "Azul", hex: "#0000ff" },
    { name: "Rosado", hex: "#ffa6c9" },
    { name: "Amarillo", hex: "#ffff00" },
]

const DevsUnitedContext = createContext([]);

export function DevsUnitedProvider({ children }) {
    console.log("excecuting DevsUnitedProvider");

    const [ user, setUser ] = useState([]);

    const [ tweets, setTweets ] = useState([]);

    const [ isLoading, setIsLoading ] = useState(false);

    const [tweet, setTweet] = useState({
        tweet:"",
        uid:"",
        
    });


    const [ devUser, setDevUser ] = useState({
        tweet : "",
        uid : "",
        likes : [""],
        email : "",
        devColor: "",
        devAvatar : "",
        devName : "",  

    });

    const [ favorites, setFavorites ] = useState([]);
        
    const [ registered, setRegistered ] = useState(false);

    const [ regUserName, setRegUserName ] = useState("");

    const [ selectColor, setSelectColor ] = useState(colors[0]);

    const [ showPosts, setShowPosts ] = useState(true)


    const value = { user, setUser, tweet, setTweet, tweets, setTweets, showPosts, setShowPosts, devUser, setDevUser, registered, setRegistered, regUserName, setRegUserName, selectColor, setSelectColor, colors, isLoading, setIsLoading, favorites, setFavorites };


 

    return (
        <DevsUnitedContext.Provider value={value}>
            {children}      
        </DevsUnitedContext.Provider>  
    );
};

export const useDB = () => useContext(DevsUnitedContext);