import React from 'react';
import './App.css';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Home from './Pages/Home';
import Signup from './Pages/Signup';
import ViewPost from './Pages/ViewPost'
import Login from './Pages/Login'
import { useEffect,useContext } from 'react';
import { AuthContext, Firebasecontext } from './Firestore/Firebasecontext';
import Create from './Components/Create/Create';
import Post from './Firestore/postContxt';

function App() {
 const {setUser} = useContext(AuthContext)
 const {firebase}= useContext(Firebasecontext)
   useEffect(() => {
     firebase.auth().onAuthStateChanged((user)=>{
      setUser(user)
     })
   })
  return (
    <div>
      <Post>
      <Router>
        <Routes>
          <Route exact path='/' element={<Home/>}/>
          <Route path='Signup' element={<Signup/>} />
          <Route path='Login' element={<Login/>} />
          <Route path='create' element={<Create/>} />
          <Route path='viewpost' element={<ViewPost/>}/>
        </Routes>
      </Router> 
      </Post> 
    </div>
  );
}

export default App;
