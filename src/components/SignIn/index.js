import "./signIn.css";

export default function SignIn() {

return (
    <div className="appSignIn">
        <section className="presentation">       
            <img src="./images/grupo2.svg" alt="ispotipo"></img>
            <img src="./images/Logotipo.svg" alt="logotipo"></img>
        </section>
        <section className="signInSection" >
            <h1>WELCOME NAME!</h1>
            <input className="userName">Type your username</input>
            <div className="pickAcolor">
                <h3>Select your favorite color</h3>
                <dic className="colors">
                    <div className="red"></div>
                    <div className="orange"></div>
                    <div className="yellow"></div>
                    <div className="green"></div>
                    <div className="blue"></div>
                    <div className="violet"></div>
                </dic>
                <button className="continue">CONTINUE</button>
            </div>
            <footer>
                <img src="./footer.svg" alt="Devs_United"></img>
            </footer>
        </section>   
    </div>
)

}