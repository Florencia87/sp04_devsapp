import Home from "./pages/Home";
import { Route, Switch, useParams } from "react-router-dom";
import Profile from "./pages/Profile";
import LogIn from "./pages/LogInPage/index";
import Register from "./pages/Register/index";
import Main from "./pages/Main/index";
import { useEffect } from "react";
import { useDB } from "./contexts/DevsUnitedContext";
import { firestore, auth } from "./firebase/index";
import { collections } from "./firebase/firebaseConfig";



function App() {
  
  const { setTweets, setUser, user } = useDB();



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
                });
              } else {
                console.log("Injecta googleCreds");
                setUser(googleCreds);
              }
            })
        } else {
          setUser(null);
        }
      })
  
    
    return () => cancelSus();
     
}, []);


  const getContent = () => {
    if ( user ) {
      return <Main />
    } else {
      return <LogIn />
    }

  }

  return <>
      
      <Switch>
          <Route exact path="/home" component={Home}/>
          <Route exact
                path="/profile" 
                render={() => {
                  return <Profile user={user} />;
                }}/>
          <Route path="/register" component={Register}/>
          {/* <Route exact path="/login" component={LogIn}/> */}
          <Route exact path="/" component={Main}/>
      
          {getContent()}
      </Switch>    
    
   </> 
}      

export default App;

// {user ?
      
//   <Switch>
      
//       <Route exact path="/home" component={Home}/>
//       <Route exact
//             path="/profile" 
//             render={() => {
//               return <Profile user={user} />;
//             }}/>
//       <Route path="/register" component={Register}/>
//       <Route exact path="/" component={Main}/>
//   </Switch>
//   : 
//   <Switch>
//     <LogIn/>  
//   </Switch>   
// }  