import {LOGO_url} from "../utils/constants";
import { useState,useContext } from "react";
import { Link } from "react-router-dom";
import useOnlineStatus from "../utils/useOnlineStatus";
import UserContext from "../utils/UserContext";
import { useSelector } from "react-redux";


const Header=() =>{
   const [btnName,setBtnName] = useState("login");
   const onlineStatus=useOnlineStatus();

   const {LoggedUser}=useContext(UserContext);
//subscribing the store using selector
    const cartItems=useSelector((store)=> store.cart.items);

   return(
    <div className="flex justify-between shadow-lg bg-purple-100" >
       <div className="logo-container">
          <img className="w-28" src={LOGO_url}></img>
       </div>
       <div className="flex items-center">
          <ul className="flex  p-4 m-4">
            <li className="px-4">Online Status : {onlineStatus ? "✅" : "🔴"}</li>
             <li className="px-4">
               <Link to="/">Home</Link>
               </li>
             <li className="px-4">
               <Link to="/about">About us</Link>
               </li>
             <li className="px-4">
               <Link to="/contact">Contact us</Link>
               </li>
             <li className="px-4">
               <Link to="/grocery">Grocery</Link>
               </li>
             <li className="px-4 font-bold text-xl">
               <Link to="/cart"><i class="fa-regular fa-cart-shopping">-({cartItems.length})</i> </Link>
               </li>
            { console.log(cartItems)}
            <button className="Login "onClick={()=>
            {
               btnName=="login"?setBtnName("logout"):setBtnName("login")
            }}>{btnName}</button>
            <li className="px-4 font-bold">{LoggedUser}</li>
          </ul>
       </div>
  
    </div>
  )
}

  export default Header;