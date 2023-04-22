import React from 'react';
import ReactDOM from 'react-dom/client';
import Context from './Firestore/Firebasecontext'
import  {Firebasecontext}  from './Firestore/Firebasecontext'
import App from './App';
import firebase from './firebase/config'


const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <Firebasecontext.Provider value={{firebase}}>
      <Context>
      <App/>
      </Context>  
     </Firebasecontext.Provider>
  </React.StrictMode>
);
