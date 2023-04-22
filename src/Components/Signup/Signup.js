import React, { useContext } from 'react';
import { useState } from 'react';
import { useNavigate } from 'react-router';
import { Firebasecontext } from '../../Firestore/Firebasecontext';
import Logo from '../../olx-logo.png';
import './Signup.css';

export default function Signup() {
  const Navigate=useNavigate()
  const [name, setname] = useState('');
  const [email, setemail] = useState('');
  const [number, setnumber] = useState('');
  const [password, setpassword] = useState('');
const {firebase}=useContext(Firebasecontext)
  const handleclick=(e)=>{
    e.preventDefault();
    firebase.auth().createUserWithEmailAndPassword(email,password).then((result)=>{
      result.user.updateProfile({displayName:name}).then(()=>{
        firebase.firestore().collection('USERS').add({
          id:result.user.uid,
          name:name,
          number:number
        }).then(()=>{
          Navigate('/Login')
        })
      })
    })
  }

  return (
    <div>
      <div className="signupParentDiv">
        <img width="200px" height="200px" alt='olx' src={Logo}></img>
        <form onSubmit={handleclick}>
          <label htmlFor="fname">Username</label>
          <br />
          <input
            className="input"
            type="text"
            id="fname"
            name="name"
            value={name}
            onChange={(e)=>setname(e.target.value)}
            defaultValue="John"
          />
          <br />
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
          <label htmlFor="lname">Phone</label>
          <br />
          <input
            className="input"
            type="number"
            id="lname"
            name="phone"
            value={number}
            onChange={(e)=>setnumber(e.target.value)}
            defaultValue="Doe"
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
          <button >Signup</button>

          <button onClick={()=>{
            Navigate('/Login')
          }} >Login</button>
        </form>
      </div>
    </div>
  );
}
