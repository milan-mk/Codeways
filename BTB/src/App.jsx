import React from "react"
import './App.css'
import {BrowserRouter as Router , Routes,Route,Link} from 'react-router-dom'

function App() {


  return (
    <Router>

    <>
      <div className="container">
        <div className="left">
          
        </div>
        <div className="right">
            <div className="upt"></div>
            <div className="lwt"></div>
            <div className="log-text text-deco">
              <span>Want to get started</span>
              <Link to="/Login">Create a account</Link>
              <span>Now</span>
            </div>
        </div>
      </div>

      {/* <Routes>
        <Route path=""/>
      </Routes>*/ }
    </>
    </Router>
  )
}

export default App
