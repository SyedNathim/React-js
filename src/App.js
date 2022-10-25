import React from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";

import Login from "./components/Login";
import Logout from "./components/Logout";
import Home from "./components/Home";
import About from "./components/About";
import Contact from "./components/Contact";
import Apply from "./components/Apply";
import Create from "./components/Create";
import SignUp from "./components/SignUp";

import Edit from "./components/Edit";

import './App.css';
const App = () => {
    return(
        <Router>
   
              
    <Switch>
                          <Route path="/" components  ={Login} exact ><Login /></Route>
                          <Route path="/logout" components  ={Logout} exact ><Logout /></Route>
                          <Route path="/home" components  ={Home} exact ><Home /></Route>
                          <Route path="/about" components  ={About} exact ><About /></Route>
                          <Route path="/contact" components  ={Contact} exact ><Contact /></Route>
                          <Route path="/apply" components  ={Apply} exact ><Apply /></Route>
                          <Route path="/create" components  ={Create} exact ><Create /></Route>
                          <Route path="/signup" components  ={SignUp} exact ><SignUp /></Route>
                          <Route path="/edit/:id" components  ={Edit} exact ><Edit /></Route>
        
                    </Switch>

      </Router>
              
                
        
    );
}


export default App