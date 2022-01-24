import { useState } from "react";
import { useDB } from "../../contexts/DevsUnitedContext";
import "./register.css";
import ColorPicker from "../../components/ColorPicker";
import { firestore } from "../../firebase";
import { collections } from "../../firebase/firebaseConfig";



export default function Register() {

    const { user, setRegistered, setIsRegistered, devUser, setDevUser } = useDB();

 

    const handleUserNameChange = e => {
        setDevUser({
            ...devUser,
            devName : e.target.value,
            uid: user.uid,
            email: user.email
        })
    };

    // Estoy probando manejar el devName utilizando el metodo update
    // const handleUserNameChange = (id, devName) => {
    //     firestore.doc(`${collections.DEVUSER}/${id}`).update({devName: setDevUser})
    // }

    const handleSubmit = (e) => {
        e.preventDefault();
        firestore.collection(collections.DEVUSER).add(devUser)
        // alert("el formulario se a enviado")
        setIsRegistered(true)
        
        
    };

    // Para mi deberia estar en el sumbit
    // const handleSubmit = (e) => {
    //     e.preventDefault();
    //     firestore.doc(`${collections.DEVUSER}/${id}`).update({devName: setDevUser})
    //     setRegistered(true);
    // }

    

    return (

        <div className="main-container">
            <div className="register-component">
                <section className="presentation">
                    <img style={{ width: "160px" }} src="./images/grupo2.svg" alt="ispotipo"></img>
                    <img style={{ width: "300px" }} src="./images/Logotipo.svg" alt="logotipo"></img>
                </section>
                <form onSubmit={handleSubmit} className="registerSection">
                    <h1>
                        WELCOME <br></br> {devUser.devName}
                    </h1>
                    <input
                        type="text"
                        value={devUser.devName}
                        placeholder="Type your UserName"
                        className="searchInput"
                        onChange={handleUserNameChange}
                    />
                    <p>Select your favorite color</p>  
                    <ColorPicker />
                    <button type="submit" className="continue" >CONTINUE</button>            
                </form> 
            </div>
            <footer>
                <img style={{ width: "200px" }} src="./images/footer.svg" alt="Devs_United"></img>
            </footer>
        </div>)

  }