import React,{useState, useContext,useRef} from 'react';
import '../styles/register.css';
import { Link, useHistory } from 'react-router-dom';
import {useAuth} from '../AuthProvider.js';


function Register() {
  const emailRef = useRef()
  const passwordRef = useRef()
  const confirmRef = useRef()

  const { signup, currentUser } = useAuth()
  const [error, setError] = useState("")
  const [loading, setLoading] = useState(false)
  const history = useHistory()

  async function handleSubmit(e) {
    e.preventDefault()

    try {
      setError("")
      setLoading(true)
      await signup(emailRef.current.value, passwordRef.current.value)
      history.push("/login")
    } catch {
      setError("Ocorreu um erro ao criar conta.")
    }

    setLoading(false)
  }

    return (
        
    
       <div>
        <div className="dados-registo">
            <h1>Regista-te</h1>
            {error &&  <Alert error={error}/>}
            <form onSubmit={handleSubmit}>
            <input type="text" ref={emailRef} placeholder="Nome de utilizador"></input>
            <input type="password" ref ={passwordRef} placeholder="Palavra-passe"></input>
            <input type="password" ref ={confirmRef} placeholder="Palavra-passe"></input>
            <button className ="register" type="submit">Criar conta</button>
            </form>
            
        </div>
        <div id="registo-conta"><p>Já tem uma conta? <Link to='/login' id="login-link">Faça login</Link></p></div>
        
</div>


       
    )
    };
    function Alert(props) {
        return(
          <div className="alert">{props.error}</div>
        )
      }

  export default Register;