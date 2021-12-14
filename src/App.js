import Home from "./pages/Home";
import { Route, Switch } from "react-router-dom";
import Profile from "./pages/Profile";
import LogIn from "./pages/LogInPage/index";
import Register from "./pages/Register/index";
import Main from "./pages/Main/index";
import { DevsUnitedContext } from "./contexts/DevsUnitedContext";
import { useContext, useEffect } from "react";
import { firestore, auth } from "./firebase/index";
import { collections } from "./firebase/firebaseConfig";

function App() {
  
  const { setTweets, setUser, user } = useContext(DevsUnitedContext);



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
                fecha : doc.data().fecha ? doc.data().fecha  : null
              }
            })
            setTweets(tweetArray)   
        });
      
      auth.onAuthStateChanged((user) => {
        setUser(user);
          
      }) 
      
    
    return () => cancelSus();
}, []);


  return (
    <Switch>
        <Route path="/logIn" component={LogIn}/> 
        <Route exact path="/home" component={Home}/>
        <Route exact
               path="/profile" 
               render={() => {
                return <Profile user={user} />;
              }}/>
        {/* <Route path="/*" component={Home}/>  */}
        <Route path="/register" component={Register}/>
        <Route exact path="/" component={Main}/>
    </Switch>   
  )
}      

export default App;
