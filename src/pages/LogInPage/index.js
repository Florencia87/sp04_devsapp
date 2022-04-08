import { loginConGoogle } from "../../firebase";
import "./logIn.css";
import { Link } from "react-router-dom";


export default function LogIn() {
  console.log("Loginnnn")
  
    

    return (    
        <div className="logIn-component">
            <section className="presentation">
                <img style={{ width: "160px" }} src="./images/grupo2.svg" alt="ispotipo"></img>
                <img style={{ width: "300px" }} src="./images/Logotipo.svg" alt="logotipo"></img>
            </section>
            <section className="logInSection">
                <h1>
                    LOREM <br></br> IPSUM DOLOR
                </h1>
                <p>
                    Lorem ipsum dolor sit amet,<br></br>consectetur adipiscing elit
                </p>
                <Link to ="/">
                    <button className="signInGoogle" onClick={loginConGoogle}>
                    <div className="googleIcon">
                    <img style={{ width: "28px", height: "30px" }} src="./images/grupo7.svg"alt="Google"></img>
                    </div>
                    <img style={{ width: "auto", height: "38px" }} src="./images/grupo6.svg" alt="googleSignIn"></img>
                    </button>
                </Link>
                <footer>
                    <img style={{ width: "200px" }} src="./images/footer.svg" alt="Devs_United"></img>
                </footer>
            </section>  
      </div>
    );
  }