import React from 'react';
import Logo from '../../olx-logo.png';
import './Login.css';
import { useState } from 'react';
import { useContext } from 'react';
import { Firebasecontext } from '../../Firestore/Firebasecontext';
import { Navigate, useNavigate } from 'react-router';

function Login() {
  const Navigate=useNavigate()
  const [email, setemail] = useState('')
  const [password, setpassword] = useState('')
  const{firebase}=useContext(Firebasecontext)

  const handleSubmit=(e)=>{
    e.preventDefault();
    firebase.auth().signInWithEmailAndPassword(email,password).then(()=>{
     Navigate('/')
    }).catch((error)=>{
      alert(error.message)
    })
  }
  return (
    <div>
      <div className="loginParentDiv">
        <img width="200px" height="200px" src={Logo}></img>
        <form onSubmit={handleSubmit}>
          <label htmlFor="fname">Email</label>
          <br />
          <input
            className="input"
            type="email"
            id="fname"
            name="email"
            value={email}
            onChange={(e)=>setemail(e.target.value)}
            defaultValue="John"
          />
          <br />
          <label htmlFor="lname">Password</label>
          <br />
          <input
            className="input"
            type="password"
            id="lname"
            name="password"
            value={password}
            onChange={(e)=>setpassword(e.target.value)}
            defaultValue="Doe"
          />
          <br />
          <br />
          <button >Login</button>
          <button onClick={()=>{
            Navigate('/Signup')
          }}>Signup</button>
        </form>
        
      </div>
    </div>
  );
}

export default Login;
