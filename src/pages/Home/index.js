import './home.css';
import TopBar from "../../components/TopBar";
import TweetBox from "../../components/TweetBox";
import Feed from "../../components/Feed";
import { useDB } from "../../contexts/DevsUnitedContext";
import Loading from "../../components/Loading/Loading";


export default function Home() {

  const { tweets, user, isLoading, devUser } = useDB();
 
  console.log(user.devName, "este es el devName desde Home")
  console.log(devUser.devName, "este es el nombre del devUser desde Home")
  

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
