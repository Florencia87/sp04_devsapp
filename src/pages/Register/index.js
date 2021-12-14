import "./register.css";


export default function Register() {
  

    return (
        <div className="register-component">
            <section className="presentation">
                <img style={{ width: "160px" }} src="./images/grupo2.svg" alt="ispotipo"></img>
                <img style={{ width: "300px" }} src="./images/Logotipo.svg" alt="logotipo"></img>
            </section>
            <section className="registerSection">
                <h1>
                    WELCOME <br></br> NAME!
                </h1>
                <input className="username">
                    type your username
                </input>
                <p>Select your favorite color</p>  
                <div className="selectButton">
                    <button style={{background: "red"}}></button>
                    <button style={{background: "orange"}}></button>
                    <button style={{background: "yellow"}}></button>
                    <button style={{background: "green"}}></button>
                    <button style={{background: "blue"}}></button>
                    <button style={{background: "violet"}}></button>     
                </div>
                <button className="continue">CONTINUE</button>         
                <footer>
                    <img style={{ width: "200px" }} src="./images/footer.svg" alt="Devs_United"></img>
                </footer>
            </section>  
      </div>
    );
  }