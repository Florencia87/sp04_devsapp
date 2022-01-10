import { useState } from "react";
import TweetBox from "../../components/TweetBox";
import { useDB } from "../../contexts/DevsUnitedContext";
import "./register.css";
import ColorPicker from "../../components/ColorPicker";



export default function Register() {

    const { tweets, user, registered, setRegistered, regUserName, setRegUserName } = useDB();

 
    const handleRegNameChange = (e) => {
       const { value } = e.target 
       setRegUserName(value)

    }

    const handleSubmit = (e) => {
        e.preventDefault();
        setRegistered(true)
        
    }

    return (
        !registered ? (
        <div className="main-container">
            <div className="register-component">
                <section className="presentation">
                    <img style={{ width: "160px" }} src="./images/grupo2.svg" alt="ispotipo"></img>
                    <img style={{ width: "300px" }} src="./images/Logotipo.svg" alt="logotipo"></img>
                </section>
                <form className="registerSection">
                    <h1>
                        WELCOME <br></br> {regUserName}
                    </h1>
                    <input
                        type="text"
                        name={regUserName}
                        placeholder="Type your UserName"
                        className="searchInput"
                        onChange={handleRegNameChange}
                    />
                    <p>Select your favorite color</p>  
                    <ColorPicker />
                    <button type="submit" onClick={handleSubmit} className="continue" >CONTINUE</button>            
                </form> 
            </div>
            <footer>
                <img style={{ width: "200px" }} src="./images/footer.svg" alt="Devs_United"></img>
            </footer>
        </div>)
        :  <Register />
    );
  }