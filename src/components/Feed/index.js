import "./feed.css";


export default function Feed({tweet}) {




    return (
        <div className="posts-feed">
            <div className="feed-component">
                <img className="profile-pic-feed" src="./images/profilePic.svg" alt="profileLogo" />
                <div className="postData">
                    <div className="info">
                        <p className="username">USERNAME</p> 
                        <p className="postDate">5 Jun</p>           
                    </div>
                    <div className="post">{tweet.tweet}</div>
                    <div className="likes">
                        100
                    </div>
                </div>
            </div>
            <div className="end-line"></div>
        </div>
    )

}