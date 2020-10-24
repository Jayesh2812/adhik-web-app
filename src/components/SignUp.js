import React,{useState} from "react";
import {Link, useHistory} from "react-router-dom"
import { auth , provider} from '../components/firebase';

import PersonIcon from '@material-ui/icons/Person';
import LockIcon from '@material-ui/icons/Lock';

import '../component_Css/LoginAndSignUp.css'
function SignUp() {
  const history = useHistory();
  const [email,setEmail] = useState("")
  const [password,setPassword] = useState("")

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

    <div className="signup">
      <form className="signup__form">
          <h1>Create Account</h1>
        
        <PersonIcon className="signup__icons"/>
        <input
            onChange={(event)=>setEmail(event.target.value)}
            required
            autoFocus
            type="text"
            name="username"
            className="signup__username"
            id="signup__username"
        />

        <label htmlFor="signup__username">Username</label>

        <LockIcon className="signup__icons"/>

        <input
            onChange={(event)=>setPassword(event.target.value)}
            required 
            type="password" 
            name="password" 
            id="signup__password" 

         />
        <label htmlFor="signup__password">Password</label>
        <button onClick={createAccount} className="signup__submit" type="submit">Create Your Account</button>
        <p className="signup__terms">By creating an account you accept our terms and conditions</p>
        <p className="signup__or">OR</p>
        <button onClick={signInWithGoogle} className="signup__withGoogle">SignUp with Google</button>
        <p className="signup__redirect">Already Have a Acoount. <Link to="/login">Log In Here</Link></p>
      </form>
    </div>
  );
}

export default SignUp;
