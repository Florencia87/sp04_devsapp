import './home.css';
import TopBar from "../../components/TopBar"
import WhatsHappening from "../../components/WhatsHappening"
import Feed from "../../components/Feed"
import LogIn from "../LogInPage/index"
import { DevsUnitedContext } from "../../contexts/DevsUnitedContext";
import { useContext } from "react";



export default function Home() {

  const { tweets } = useContext(DevsUnitedContext);
  const { user } = useContext(DevsUnitedContext);
  const { isAuthenticated } = useContext(DevsUnitedContext);


  
  

  return (
    // user ? (
    <div className="App-container">
      <TopBar user={user} />
      <WhatsHappening
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
    </div> )
    // : <LogIn />)  
    
  }