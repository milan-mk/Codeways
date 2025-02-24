import React from "react"
import './App.css'
import Login from "./Login2/Login.jsx"
import About from "../components/About.jsx"
import { Link } from "react-router-dom"
import Signup from "../components/Signup.jsx"

function App() {

  return (

    <>
      <div className="container">
        <div className="left">

        </div>
        <div className="right">
          <div className="upt"></div>
          <div className="lwt"></div>
          <div className="log-text text-up text-deco ">
            <span>Want to get started?</span>
            <Link to="/Signup" className="button">Create an account</Link>
            
          </div>
          <div className="log-text text-down text-deco">
            <span>Already a member?</span>
            <Link to="/login" className="button">Login</Link>
          </div>
        </div>
      </div>

    </>

  )
}

export default App
