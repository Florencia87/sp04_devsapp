import "./logIn.css";

export default function LogIn() {

return (
    <div className="logIn-component">
        <section className="presentation">       
            <img src="./images/grupo2.svg" alt="ispotipo"></img>
            <img src="./images/Logotipo.svg" alt="logotipo"></img>
        </section>
        <section className="logInSection" >
            <h1>LOREM IPSUM DOLOR</h1>
            <h3>Lorem ipsum dolor sit amet, consectetur adipiscing elit</h3>
            <div className="signInGoogle">
                <div>
                    <img src="./grupo7.svg" alt="Google"></img>
                </div>
                <img src="./grupo6.svg" alt="googleSignIn"></img>
            </div>
            <footer>
                <img src="./footer.svg" alt="Devs_United"></img>
            </footer>
        </section>   
    </div>
)


}