import LogIn from "./pages/LogInPage/index";
import Main from "./pages/Main/index";
import { useEffect } from "react";
import { useDB } from "./contexts/DevsUnitedContext";
import { firestore, auth } from "./firebase/index";
import { collections } from "./firebase/firebaseConfig";



function App() {
  
  const { setTweets, setUser, user,setRegistered } = useDB();

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
                    console.log("COntexto: {}, {}", user, setUser);
                    setUser(doc.data());
                    setRegistered(true);
                });
              } else {
                console.log("Injecta googleCreds");
                setUser(googleCreds);
                setRegistered(false);
                console.log("App.auth -> user: ", user);
              }
            })
        } else {
          setUser(null);
        }
      })
  
    
    return () => cancelSus();
     
}, []);



  return (
    <>
        {user ?
          <Main />
          :
          <LogIn />
        }
          
    </>
  ) 
}      

export default App;
