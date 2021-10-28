import "./whatsHappening.css";


export default function WhatsHappening() {

    return (
        <div className="initial-post-area">
            <div className="pic-and-type">
                <img className="profile-pic-wh" src="./images/profilePic.svg" alt="profileLogo" />
                <form className="wh-form">
                    <textarea placeholder=" What's happening" cols="60" rows="7"></textarea>
                    <div className="counting">
                        <div className="counting-in">17</div>
                        <div className="counting-max">200 max.</div>
                    </div>
                    <button className="post-btn">POST</button>
                </form>
            </div>
        </div>
    )

}    