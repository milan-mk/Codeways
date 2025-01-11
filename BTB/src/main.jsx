import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'
import Navbar from "../components/Navbar.jsx"
import Footer from "../components/Footer.jsx"
import Login from './Login2/Login.jsx'
import About from '../components/About.jsx'

import { RouterProvider, Routes, Route, Link, createBrowserRouter } from 'react-router-dom'


const router = createBrowserRouter([
  {
    path: "/",
    element: <App/>
  },
  {
    path: "/login",
    element: <Login/>
  },
  {
    path: "/about",
    element: <About/>
  },
])

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <Navbar/>
    <RouterProvider router = {router} />
    <Footer/>
  </StrictMode>,
)
