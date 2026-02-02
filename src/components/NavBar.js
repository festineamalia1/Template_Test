import React, { useState, useRef, useContext } from "react";
import { Link, useNavigate } from "react-router-dom";

export default function NavBar() {
  return (
      <nav className="navbar navbar-expand-lg bg-[#043873]">
    <div className="container">
      <a className="navbar-brand d-flex align-items-center">
         <div className="logo d-flex align-items-center justify-content-center"  
        //  onClick={() => navigate(`/home`)}
         > 
         
         {/* <img src={require(`../assets/images/order-icon.png`)} alt="Logo" className="logo-title w-80 px-2"/>  */}
          <img src={require(`../assets/images/white-space-logo.png`)} alt="Logo" className="logo-title" />

          </div>
      </a>

      <div className="ms-auto">
        <ul className="navbar-nav flex-row gap-3">
      
          <li className="nav-item nav-link-nonactive">
            <div className="nav-link " 
            // onClick={() => {navigate('/')}}
            >Logout</div>
          </li>
        </ul>
      </div>
    </div>
  </nav>
  );
}