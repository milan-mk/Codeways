import React from "react"
import './App.css'
import Login from "./Login2/Login.jsx"
import About from "../components/About.jsx"
import { Link } from "react-router-dom"

function App() {

  return (

    <>
      <div className="container">
        <div className="left">

        </div>
        <div className="right">
          <div className="upt"></div>
          <div className="lwt"></div>
          <div className="log-text text-deco">
            <span>Want to get started</span>
            <Link to="/login">Create a account</Link>
            <span>Now</span>
          </div>
        </div>
      </div>

    </>

  )
}

export default App
