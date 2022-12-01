import { useDB } from "../../contexts/DevsUnitedContext";
import "./register.css";
import ColorPicker from "../../components/ColorPicker";
import { firestore } from "../../firebase";
import { collections } from "../../firebase/firebaseConfig";
import { useEffect } from "react";
import Home from "../Home/index"



export default function Register() {

    const { user, setRegistered, devUser, setDevUser, userId, registered } = useDB();

    console.log("pase por register") 
    console.log(userId, "este es el userId desde Register")

    
    const handleUserNameChange = e => {
        setDevUser({
            ...devUser,
            devName : e.target.value,
            uid: user.uid,
            email: user.email,
            devAvatar: user.photoURL,
           
        })
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        firestore.collection(collections.DEVUSER)
            .where('devName', '==', devUser.devName)
            .get()
            .then(function(querySnapshot) {
                let userExists = false
                querySnapshot.forEach(function(doc) {
                    console.log(doc.id, "=>", doc.data());
                    return userExists = true
                });
                if(userExists){
                    alert("Ya existe el Username por favor ecribe otro")
                }else{
                    let enviarUsuario = firestore.collection(collections.DEVUSER).add(devUser);
                    let solicitarDocumento = enviarUsuario.then((docRef) => {
                        return docRef.get();
                    })
                    setRegistered(true)
                    setDevUser({
                        devName: "",
                    })
                }
            })
                 
                   
            .catch(function(error) {
                console.log("Error getting documents: ", error);
            });
       
    };

    return (
        <>
            {registered === false && (
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
                            
                                <button type="submit"  className="continue">CONTINUE</button>    
                                        
                        </form> 

                        {/* <>{setRegistered != true getUserId()</> */}
                    </div>
                    <footer>
                        <img style={{ width: "200px" }} src="./images/footer.svg" alt="Devs_United"></img>
                    </footer>
                </div> 
            )} 
            {registered && (
                <Home/>
            )}
        </>
    )
       
            
  }
