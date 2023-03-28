import React from 'react';
import { Text } from '../../elements';
import './index.css';
import { useDispatch } from 'react-redux';

import { AUTH_ACTIONS } from '../../../store/reducer/auth/reducerSlice';
import { ReactComponent as Grid } from './images/grid.svg';
import { ReactComponent as Wallet } from './images/wallet.svg';
import { ReactComponent as Payment } from './images/payment.svg';
import { ReactComponent as Newsfeeds } from './images/newsfeed.svg';
import { ReactComponent as Logout } from './images/logout.svg';
import logo from './images/josla_logo.png';


// '../store/reducer/auth/authSlice'

// SIDE BAR ITEMS

/*

-   The Items displayed on the SideBar will depend on the type of User (Admin, Consumer, and Interprise)
-   for the Admin User:
      Users:
        - displays the list of all users.
        - can be sorted by country, region, state
        - can be sorted by discos
        - can be sorted by energy usage

      Blogs:
        - The list of published blog posts
        - 
*/


const Num =({num})=>{
  return(
    <div 
    style={{backgroundColor:"#f4e7e6", 
    borderRadius:"50%", 
    width:"40px", 
    height:"40px",
    color:"",
    display:"grid",
    placeItems:"center"}}>
        <p>{num}</p>
    </div>
  )
}


export const SideBar = () => {

  const { logOutUser } = AUTH_ACTIONS
  const dispatch = useDispatch();

  const logout = () => {
    dispatch(logOutUser());
  };

  return (
    <div className="sidebar">
      <div className="logo" >
        <div className="logo__img" id ="breathing-logo">
             <img src={logo} alt="Josla Electric" />
        </div>
      </div>
      
      <div  className="box1 box">
        <Grid />
        <Text className="containerText">Admin</Text>
      </div>
     
      <div className="box">
        <Wallet />
        <Text>Users</Text>
      </div>

      <div className="box">
        <Payment />
        <Text>Analytics</Text>
      </div>

      <div className="box">
        <Newsfeeds />
        <Text>Devices</Text>
        <Num num ={3}/>
      </div>
      <hr />

      <div className="space" />

      <button type="button" className="box remove-btn-prop" onClick={()=>logout()}>
        <Text>Log Out</Text>
        <Logout className="log" />
      </button>

      <div className="box">
        <Text text="Help & Support" color="green" />
      </div>
    </div>
  );
};
