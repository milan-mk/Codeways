import React from 'react'
import './Signup.css'
import { Link } from 'react-router-dom'


const Signup = () => {
  return (
    <>
      <div>
        <form className='form box' action="">
          <div className='form-box'>
            <input className='box-inp' type="text" placeholder='enter your username'/>
          </div>
          <div className='form-box'>
            <input className='box-inp' type="email" placeholder='enter your email' />
          </div>
          <div className='form-box'>
            <input className='box-inp' placeholder='enter your password' type="text" name="" id="" />
          </div>
          <div className='form-box'>
            <span className='spn'>Already have an account? <Link to='/login' className='link'>Sign in</Link></span>
          </div>
          <div>
            <button className='signup-btn'>Sign Up</button>
          </div>
          
        </form>
      </div>
    </>
  )
}

export default Signup
