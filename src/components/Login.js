import React,{useState} from "react";
import {Link, useHistory} from "react-router-dom"
import { auth , provider} from '../components/firebase';
import PersonIcon from '@material-ui/icons/Person';
import LockIcon from '@material-ui/icons/Lock';
import '../component_Css/LoginAndSignUp.css'

function Login() {
  const history = useHistory();
  const [email,setEmail] = useState("")
  const [password,setPassword] = useState("")

  const signIn=(event)=>{
    event.preventDefault()
    auth.signInWithEmailAndPassword(email, password)
    .then(auth=>{
      // console.log(auth)
      history.push('/')
    })
    .catch(e=>alert(e.message))
  }

  // 
  const createAccount= (event) =>{
    event.preventDefault();
    auth.createUserWithEmailAndPassword(email, password)
    .then(auth =>{
        // 
        history.push('/')
    })
    .catch(e=>alert(e.message))

}
  // 

  const signInWithGoogle=(event)=>{
    event.preventDefault()
    auth.signInWithPopup(provider)
    .then(auth=>{
      console.log(auth)
      history.push('/')
    })
    .catch(e=>alert(e.message))
  }
  return (

    <div className="login">
      <form className="login__form">
          <h1>Log In</h1>
        
        <PersonIcon className="login__icons"/>
        <input
            onChange={(event)=>setEmail(event.target.value)}
            required
            autoFocus
            type="email"
            name="username"
            className="login__username"
            id="login__username"
        />

        <label htmlFor="login__username">Username</label>

        <LockIcon className="login__icons"/>
        <input
            onChange={(event)=>setPassword(event.target.value)}
            required 
            type="password" 
            name="password" 
            id="login__password" 

         />
        <label htmlFor="login__password">Password</label>
        <button onClick={signIn}className="login__submit" type="submit">Login</button>

        <p className="login__terms">By loging In you accept our terms and conditions</p>
        <p className="login__or">OR</p>

        <button onClick={signInWithGoogle} className="login__withGoogle">Login with Google</button>
        <p className="login__redirect">Don't Have a Acoount. <Link to="/create">Sign Up Here</Link></p>
        
      </form>
    </div>
  );
}

export default Login;
