import React, { Fragment, useContext, useState } from 'react';
import { useNavigate } from 'react-router';
import './Create.css';
import Header from '../Header/Header';
import { AuthContext, Firebasecontext } from '../../Firestore/Firebasecontext';


const Create = () => {
  const [name, setName] = useState('')
  const [category, setCategory] = useState('')
  const [price, setprice] = useState('')
  const [image, setImage] = useState()
  const{firebase}=useContext(Firebasecontext)
  const{user}=useContext(AuthContext)
  const date=new Date()
  const navigate=useNavigate()
  const handleSubmit=()=>{
    firebase.storage().ref(`/images/${image.name}`).put(image).then(({ref})=>{
       ref.getDownloadURL().then((url)=>{
        console.log(url)
        firebase.firestore().collection('products').add({
          name,
          category,
          price,
          url,
          userId:user.uid,
          createdAt:date.toDateString()

        })
        navigate('/')
       })
    })
  }
  return (
    <Fragment>
      <Header />
      
        <div className="centerDiv">
        
            <label htmlFor="fname">Name</label>
            <br />
            <input
              className="input"
              type="text"
              id="fname"
              name="Name"
              value={name}
              defaultValue="John"
              onChange={(e)=>setName(e.target.value)
              }
            />
            <br />
            <label htmlFor="fname">Category</label>
            <br />
            <input
              className="input"
              type="text"
              id="fname"
              name="category"
              value={category}
              defaultValue="John"
              onChange={(e)=>setCategory(e.target.value)}
            />
            <br />
            <label htmlFor="fname">Price</label>
            <br />
            <input className="input" type="number" id="fname" name="Price"
              value={price} onChange={(e)=>setprice(e.target.value)}/>
            <br />
 
          <br />
          <img alt="Posts" width="200px" height="200px" src={image ? URL.createObjectURL(image):''}></img>
         
            <br />
            <input onChange={(e)=>setImage(e.target.files[0])} type="file" />
            <br />
            <button onClick={handleSubmit} className="uploadBtn">upload and Submit</button>
          
        </div>
  
    </Fragment>
  );
};

export default Create;
