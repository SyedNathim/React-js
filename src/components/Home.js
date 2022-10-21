import React, { Component } from "react"
import HomeSlider from "./HomeSlider"
import { Header, Footer } from "./common/Header";


import "./HomeSlider.css"
import { Redirect } from "react-router-dom";

export default class Home extends Component{

constructor(props){
    super(props)
    const loggedIn = localStorage.getItem("login-info")

    let token = true
    // console.log()
    if (loggedIn == null ) {
     token =false   
    }

    this.state = {
        token
    }
}


render() {
    if (this.state.token === false) {
        return <Redirect to="/" />
    }
    return (
        <section>
            <Header/>
        <HomeSlider />
        <Footer/>
        </section>
    )
}
}

