import React from 'react';
import { useContext,useState,useEffect } from 'react';
import Heart from '../../assets/Heart';
import { Firebasecontext } from '../../Firestore/Firebasecontext';
import './Post.css';
import { useNavigate } from 'react-router';
import { postContext } from '../../Firestore/postContxt';

function Posts() {
  const navigate=useNavigate()
const{firebase}=useContext(Firebasecontext)
const [products, setproducts] = useState([])
const{setpostDetails}=useContext(postContext)
useEffect(() => {
firebase.firestore().collection('products').get().then((snapshot)=>{
  const allPost=snapshot.docs.map((product)=>{
    return{
      ...product.data(),
      id:product.id
    }
  })
setproducts(allPost)
})
},[])


  return (
    <div className="postParentDiv">
      <div className="moreView">
        <div className="heading">
          <span>Quick Menu</span>
          <span>View more</span>
        </div>
        <div className="cards">
          { products.map((obj)=>{
             return <div onClick={()=>{
              setpostDetails(obj)
                 navigate('/Viewpost')
             }}
              className="card"
            >
              <div className="favorite">
                <Heart></Heart>
              </div>
              <div className="image">
                <img src={obj.url} alt="" />
              </div>
              <div className="content">
                <p className="rate">&#x20B9; {obj.price}</p>
                <span className="kilometer">{obj.category}</span>
                <p className="name">{obj.name}</p>
              </div>
              <div className="date">
                <span>{obj.createdAt}</span>
              </div>
            </div>
          })
         }
        </div>
      </div>
    <div className="recommendations">
        <div className="heading">
          <span>Fresh recommendations</span>
        </div>
        {products.map((obj2)=>{
        return(<div className="cards">
          <div className="card">
            <div className="favorite">
              <Heart></Heart>
            </div>
            <div className="image">
              <img src={obj2.url} alt="" />
            </div>
            <div className="content">
              <p className="rate">&#x20B9; {obj2.price}</p>
              <span className="kilometer">{obj2.category}</span>
              <p className="name">{obj2.name}</p>
            </div>
            <div className="date">
              <span>{obj2.createdAt}</span>
            </div>
          </div>
        </div>)})}
      </div>
    </div>
  );
}

export default Posts;
