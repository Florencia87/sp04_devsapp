import "./feed.css";


export default function Feed() {




    return (
        <div className="posts-feed">
            <div className="start-line"></div>
            <div className="feed-component">
                <img className="profile-pic-feed" src="./images/profilePic.svg" alt="profileLogo" />
                <div className="postData">
                    <div className="info">
                        <p className="username">USERNAME</p> 
                        <p className="postDate">5 Jun</p>           
                    </div>
                    <div className="post">Lorem ipsum dolor sit amet consectetur adipisicing elit. Commodi expedita voluptatem veniam tempore libero voluptate aspernatur ducimus vero, neque reiciendis? Recusandae itaque a aliquid ullam cupiditate voluptates deleniti ab asperiores!</div>
                    <div className="likes">
                        100
                    </div>


                </div>
            </div>
            <div className="end-line"></div>
        </div>
    )

}