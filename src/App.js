import LogIn from "./pages/LogInPage/index";
import Home from "./pages/Home/index";
import Profile from "./pages/Profile/index";
// import Register from "../../pages/Register/index";
// import Main from "./pages/Main/index";
import { useEffect } from "react";
import { useDB } from "./contexts/DevsUnitedContext";
import { firestore, auth } from "./firebase/index";
import { collections } from "./firebase/firebaseConfig";
import Register from "./pages/Register/index"
import { Route } from "react-router-dom";



function App() {
  
  const { setTweets, setUser, user,setRegistered, state, setCurrentState } = useDB();

  

  console.log("App -> user: ", user);

  

  useEffect(() => {
    const cancelSus = firestore
        .collection(collections.TWEETS)
        .orderBy("date","desc")
        .onSnapshot((snapshot) => {
            const tweetArray = snapshot.docs.map(doc => {
              return {
                tweet : doc.data().tweet,
                id : doc.id,
                likes : doc.data().likes,
                uid : doc.data().uid,
                mail : doc.data().mail,
                userAvatar : doc.data().userAvatar,
                userName : doc.data().userName,
                userDate : doc.data().userDate,
                userMonth : doc.data().userMonth,
                userColor: doc.data().userColor,
                date : doc.data().date ? doc.data().date : null,
                fecha : doc.data().fecha ? doc.data().fecha  : null,
                name: doc.data().name ? doc.data().name : null
              }
            })
            setTweets(tweetArray)   
        });
      
      auth.onAuthStateChanged((googleCreds) => {
        console.log("USR: ", googleCreds)
        if (googleCreds != null) {
          firestore
            .collection(collections.DEVUSER)
            .where("uid", "==", googleCreds.uid)
            .get()
            .then( (querySnapshot) => {
              console.log("Condicional: ", !querySnapshot.empty);
              console.log("Objeto: ", querySnapshot);
              if (!querySnapshot.empty) {
                querySnapshot.forEach((doc) => {
                    console.log("Obtuvo usuario: ", doc.data());
                    setUser(doc.data());
                    setRegistered(true);
                    setCurrentState(5)
                });
              } else {
                console.log("Injecta googleCreds");
                setUser(googleCreds);
                setRegistered(false);
                setCurrentState(3)
                console.log("App.auth -> user: ", user);
              }
            })
        } else {
          setUser(null);
          setCurrentState(4)
          console.log("no hay nadie logueado")
        }
      })
  
    
    return () => cancelSus();
     
}, []);

  if (state === 4) {
    return < LogIn />
  }

  if (state === 3) {
    return <Register />
  }

  if (state === 5) {
    return (
      <>
            
            <Route exact path="/" component={Home} />
            <Route exact path="/profile" component={Profile} />
      </>      
    )
  }

  return (
    <>
      {user === null && (
        <LogIn />
      )}

      {state === 5 && (
        <Home />
      )}
    </>
  ) 
}      

export default App;
