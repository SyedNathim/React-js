import React from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";

import './App.css';
import { Header, Footer } from "./components/common/Header";

import Home from "./components/Home";
import About from "./components/About";
import Contact from "./components/Contact";
import Apply from "./components/Apply";
import Create from "./components/Create";

const App = () => {
    return(
        <Router>
    <Header />
              
    <Switch>
                          <Route path="/home" components  ={Home} exact ><Home /></Route>
                          <Route path="/about" components  ={About} exact ><About /></Route>
                          <Route path="/contact" components  ={Contact} exact ><Contact /></Route>
                          <Route path="/apply" components  ={Apply} exact ><Apply /></Route>
                          <Route path="/create" components  ={Create} exact ><Create /></Route>
        
                    </Switch>
                    <Footer />

      </Router>
              
                
        
    );
}


export default App