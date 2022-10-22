import React from "react"
import { Link } from "react-router-dom"
import './Header.css';

import './Footer.css';
// let sampleJSON = localStorage.getItem("login-info");
const username = JSON.parse(localStorage.getItem('login-info'));
let userName = "Logo";

// console.log(username.msg);

const Header = () => {

    
    return(
        <section className="Header">

        <nav className="navbar">
            <h3 className="logo">{username ? (username.customer.name): ({userName})}</h3>
            <ul className="nav-links">
            
                    <li><Link to='/home'>Home</Link></li>
                    <li><Link to='/about'>About</Link></li>
                    <li><Link to='/contact'>Contact</Link></li>
                    <li><Link to='/logout'>Logout</Link></li>
            
            </ul>
        </nav>
        </section>
    );
}
  
const Footer = () => {
    return(
      
        <footer className="footer"> 
                      <div className="container">
            <div className="col-md-6">Logo</div>
            <div className="col-md-6"><h5><Link to='/apply'>List</Link></h5></div>

            </div>
            </footer>

        
    );
}



export { Header, Footer };