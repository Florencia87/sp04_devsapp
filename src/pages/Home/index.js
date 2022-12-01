import './home.css';
import TopBar from "../../components/TopBar";
import TweetBox from "../../components/TweetBox";
import Feed from "../../components/Feed";
import { useDB } from "../../contexts/DevsUnitedContext";
import Loading from "../../components/Loading/Loading";
import { collections } from "../../firebase/firebaseConfig";
import { firestore } from "../../firebase/index";
import { useEffect } from "react" 

export default function Home() {

  const { tweets, user, isLoading, devUser, setUser, setUserId } = useDB();
 
  console.log(user.devName, "este es el devName desde Home")  

  useEffect(() => {
    fetchUserId()
  }, [])

  const fetchUserId = async (devUser) => {
    return firestore.collection(collections.DEVUSER)
        .where("uid", "==", user.uid)
        .get()
        .then(snapshot => {
            return snapshot.docs.map(doc => {
                const userData = doc.data()
                const devId = doc.id
                console.log(devId, "este es el devID")
                console.log("este es el doc", {userData})
                // setUserId(devId)
                // return {
                //     devId,
                //     ...userData,
                // }
                setUser(doc.data());
                setUserId(devId)
            })    
        })
        
  }

  return (
    <>
         
          <div className="App-container">
            {isLoading && (
              <Loading />)
            }
              <TopBar user={user} />
              <TweetBox
                user={user}
              />
              <div className="start-line"></div>
              <div className="feed-container">
                  {tweets.map((tweet, index) => {
                    return <Feed
                                key={index}
                                tweet={tweet} 
                                user={user}
                            />
                })}
              </div> 
          </div> 
        
    </>
    )
  }
