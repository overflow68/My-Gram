import React,{useState, useContext,useRef} from 'react';
import girl from '../images/girl.jpg';
import '../styles/login.css';
import Navbar from '../components/Navbar.js'
import { Link, useHistory } from 'react-router-dom';
import {useAuth} from '../AuthProvider.js';


function Login() {
  const emailRef = useRef()
  const passwordRef = useRef()

  const { login, currentUser, logout } = useAuth()
  const [error, setError] = useState("")
  const [loading, setLoading] = useState(false)
  const history = useHistory()

  async function handleSubmit(e) {
    e.preventDefault()

    try {
      setError("")
      setLoading(true)
      await login(emailRef.current.value, passwordRef.current.value)
      history.push("/profile")
    } catch {
      setError("Ocorreu um erro.")
    }

    setLoading(false)
  }

    return (
        <>
        {!currentUser ? (<div id="main-container">
     
        <div id="imagens"><img id ="image" alt="" src ={girl}></img></div>
        <div id ="dados-login-registo">
        <div id="dados-login">
            <h1 id="title">My-Gram</h1>
            
            {error &&  <Alert error={error}/>}
            <form onSubmit={handleSubmit}>
            <input type="text" ref={emailRef} placeholder="Nome de utilizador"></input>
            <input type="password" ref ={passwordRef} placeholder="Palavra-passe"></input>
            <button className ="login" type="submit">Entrar</button>
            </form>
        </div>
        <div id="registo"><p>Não tem uma conta? <Link to='/register' id="regist-link" href="youtube.com">Registe-se</Link></p>
        </div>
        </div>
    </div>):(<div id="reg"><Navbar/><div id="must-logout">Já tens sessão iniciada</div><button id="logout-btn" onClick={logout}>Logout</button></div>)}
    
    </>

       
    )
    };

    function Alert(props) {
      return(
        <div className="alert">{props.error}</div>
      )
    }



  export default Login;