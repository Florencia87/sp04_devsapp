import { createContext, useState } from "react";

export const DevsUnitedContext = createContext();

// export const DevsUnitedProvider = (props) => {

//     const [tweets, setTweets] = useState([]);

//     const devsUnitedValues = {
//         tweets,
//         setTweets
//     }

//     return (
//         <DevsUnitedContext.Provider value={{devsUnitedValues}}>
//             {props.children}
//         </DevsUnitedContext.Provider>    
//     )
// }

export const DevsUnitedProvider = (props) => {


    return (
        <DevsUnitedContext.Provider value={{}}>
            {props.children}
        </DevsUnitedContext.Provider>    
    )
}