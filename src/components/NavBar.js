import React, { useState, useRef, useContext } from "react";
import { Link, useNavigate } from "react-router-dom";

export default function NavBar() {
  return (
      <nav class="navbar navbar-expand-lg bg-white">
    <div class="container">
      <a class="navbar-brand d-flex align-items-center">
         <div class="logo d-flex align-items-center justify-content-center"  
        //  onClick={() => navigate(`/home`)}
         > 
         
         {/* <img src={require(`../assets/images/order-icon.png`)} alt="Logo" className="logo-title w-80 px-2"/>  */}
          LOGO
          </div>
      </a>

      <div class="ms-auto">
        <ul class="navbar-nav flex-row gap-3">
      
          <li className="nav-item nav-link-nonactive">
            <div class="nav-link " 
            // onClick={() => {navigate('/')}}
            >Logout</div>
          </li>
        </ul>
      </div>
    </div>
  </nav>
  );
}