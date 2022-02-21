import './home.css';
import TopBar from "../../components/TopBar";
import TweetBox from "../../components/TweetBox";
import Feed from "../../components/Feed";
import { useDB } from "../../contexts/DevsUnitedContext";
import Loading from "../../components/Loading/Loading";
import Register from "../Register/index";




export default function Home() {

  const { tweets, user, isRegistered, isLoading, setIsRegistered, devUser } = useDB();
  
  // const yaRegistrado = query(collection (db, "devsUsers"), where("email", "==", true))
    
  

  return (
    <>
        {devUser ? 
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
          : <Register />
        }  
    </>
    )
  }
