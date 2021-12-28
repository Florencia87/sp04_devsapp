import React, { createContext, useContext, useState} from "react";



const DevsUnitedContext = createContext([]);

export function DevsUnitedProvider({ children }) {
    console.log("excecuting DevsUnitedProvider");

    const [ user, setUser ] = useState([]);

    const [ tweets, setTweets ] = useState([]);
        
    const [ authenticated, setAuthenticated ] = useState(false);

    const value = { user, setUser, tweets, setTweets, authenticated, setAuthenticated };

    return (
        <DevsUnitedContext.Provider value={value}>
            {children}      
        </DevsUnitedContext.Provider>  
    );
};

export const useDB = () => useContext(DevsUnitedContext);