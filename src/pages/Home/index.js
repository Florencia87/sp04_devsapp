import './home.css';
import TopBar from "../../components/TopBar";
import TweetBox from "../../components/TweetBox";
import Feed from "../../components/Feed";
import { useDB } from "../../contexts/DevsUnitedContext";
import Loading from "../../components/Loading/Loading";
// import Register from "../Register/index";
// import Main from "../Main/index";
// import LogIn from '../LogInPage';




export default function Home() {

  const { tweets, user, isLoading, devUser } = useDB();
  
  // const yaRegistrado = query(collection (db, "devsUsers"), where("email", "==", true))
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

  // return (
  //   <>
  //       { user.devName === undefined ?
  //         <LogIn />
  //         : 
  //         <div className="App-container">
  //           {isLoading && (
  //             <Loading />)
  //           }
  //             <TopBar user={user} />
  //             <TweetBox
  //               user={user}
  //             />
  //             <div className="start-line"></div>
  //             <div className="feed-container">
  //                 {tweets.map((tweet, index) => {
  //                   return <Feed
  //                               key={index}
  //                               tweet={tweet} 
  //                               user={user}
  //                           />
  //               })}
  //             </div> 
  //         </div> 
  //       }  
  //   </>
  //   )
