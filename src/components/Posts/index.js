
import "./posts.css";



export default function Posts({post, like}) {

   
    const months = [ 
        "Diciembre",   
        "Enero",
        "Febrero",
        "Marzo",
        "Abril",
        "Mayo",
        "Junio",
        "Julio",
        "Agosto",
        "Septiembre",
        "Octubre",
        "Noviembre",
        "Diciembre"
       
      ];


    return (
        <div className="posts-feed">
            <div className="feed-component">
                <img className="profile-pic-feed" src={post.userAvatar} alt="profileLogo" />
                <div className="postData">
                    <div className="info">
                        <p className="username"
                           style={{ backgroundColor: post.userColor }}
                        >{post.name || post.userName}</p> 
                        <p className="postDate">{post.userDate}<> de </>{months[post.userMonth]}</p>           
                    </div>
                    <div className="post">{post.tweet}</div>
                </div>
            </div>
            <div className="end-line"></div>
        </div>
    )

}

