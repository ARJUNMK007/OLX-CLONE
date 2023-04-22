import React from 'react';
import { useContext } from 'react';
import { useNavigate } from 'react-router';
import './Header.css';
import OlxLogo from '../../assets/OlxLogo';
import Search from '../../assets/Search';
import Arrow from '../../assets/Arrow';
import SellButton from '../../assets/SellButton';
import SellButtonPlus from '../../assets/SellButtonPlus';
import { AuthContext, Firebasecontext } from '../../Firestore/Firebasecontext';
function Header() {
  const{user}=useContext(AuthContext)
  const{firebase}=useContext(Firebasecontext)
  const navigate =useNavigate()
  return (
    <div className="headerParentDiv">
      <div className="headerChildDiv">
        <div className="brandName">
          <OlxLogo></OlxLogo>
        </div>
        <div className="placeSearch">
          <Search></Search>
          <input className='IN1' type="text" value="INDIA"/>
          <button className='B1'><Arrow/></button>
        </div>
        <div className="productSearch">
          <div className="input">
            <input
              type="text"
              placeholder="Find car,mobile phone and more..."
            />
          </div>
          <div className="searchAction">
            <Search color="#ffffff"></Search>
          </div>
        </div>
        <div className="language">
          <span> ENGLISH </span>
          <Arrow></Arrow>
        </div>
        <div className="loginPage">
          <span onClick={()=>{
            navigate('/Login')
          }}>{ user ? (user.displayName):'LOGIN'}</span>
          <hr />
        </div>
         {user && <span onClick={()=>{
          firebase.auth().signOut().then(()=>{
            navigate('\Signup')
          })
         }}>Logout</span>}
        <div className="sellMenu">
          <SellButton></SellButton>
          <div className="sellMenuContent">
            <SellButtonPlus></SellButtonPlus>
            {user ?<span onClick={()=>{
              navigate('/create')
            }}>SELL</span>:'SELL'}
          </div>
        </div>
      </div>
    </div>
  );
}

export default Header;
