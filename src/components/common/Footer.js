import React from "react"

import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import { Link } from "react-router-dom"

import './Footer.css';

import Apply from "../Apply";
const Footer = () => {
    return(
      
        <Router>  
        
           <div className="container">
            <div className="md-6">Logo</div>
            <div className="md-6"><h5><Link to='/apply'>Apply</Link></h5></div>

            </div>
        <Switch>
        <Route path="/apply" components common ={Apply} exact ><Apply /></Route>
        </Switch>
  
  </Router>
  
    );
}


export default Footer