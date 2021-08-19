import React,{useState, useEffect,useRef} from 'react';
import '../styles/register.css';
import { Link, useHistory } from 'react-router-dom';
import {useAuth} from '../AuthProvider.js';
import Navbar from '../components/Navbar.js'


function Register() {
  const emailRef = useRef()
  const passwordRef = useRef()
  const confirmRef = useRef()
  const userRef = useRef()
  const picRef = useRef()

  const { signup,currentUser,logout} = useAuth()
  const [error, setError] = useState("")
  const [loading, setLoading] = useState(false)
  const history = useHistory()




  async function handleSubmit(e) {
    e.preventDefault()

    
      setError("");
      setLoading(true);
      await signup(emailRef.current.value, passwordRef.current.value,userRef.current.value)
      history.push("/profile");
      setError("Ocorreu um erro ao criar conta.")
    

    setLoading(false)
  }

    return (
        
    <>
    {!currentUser ?(<div>
         
        <div className="dados-registo">
            <h1>Regista-te</h1>
            {error &&  <Alert error={error}/>}
            <form onSubmit={handleSubmit}>
            <input type="text" ref={userRef} placeholder="Nome de utilizador"></input>
            <input type="text" ref={emailRef} placeholder="E-mail"></input>
            <input type="password" ref ={passwordRef} placeholder="Palavra-passe"></input>
            <input type="password" ref ={confirmRef} placeholder="Palavra-passe"></input>
            <button className ="register" type="submit">Criar conta</button>
            </form>
            
        </div>
        <div id="registo-conta"><p>Já tem uma conta? <Link to='/' id="login-link">Faça login</Link></p></div>
        
</div>) : (<div id="reg"><Navbar/><div id="must-logout">Não podes registar enquanto tens sessão iniciada</div><button id="logout-btn" onClick={logout}>Logout</button></div>)}
       
</>

       
    )
    };
    function Alert(props) {
        return(
          <div className="alert">{props.error}</div>
        )
      }

  export default Register;