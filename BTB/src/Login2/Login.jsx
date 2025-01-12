import React from 'react'
import { useState } from 'react'
import './Login.css'
import { Link } from 'react-router-dom'

const Login = () => {

  const [form, setform] = useState([])

  const handlechange = (e) =>{
    setform({...form,[e.target.name]:e.target.value})
    console.log(form)
  }

  return (
    <>
      <div className='mainbox'>

        <div className='container1 outerbox'>
          <h2 className='heading'>Log In</h2>
          <div className='container1'>
            <div className='innercontainer'>
              <label htmlFor="email">E-mail</label>
              <input onChange={handlechange} name='email' value={form.email} type="text" placeholder='Enter your email id' />
            </div>
            <div className='innercontainer'>
              <label htmlFor="email">Password</label>
              <input onChange={handlechange} name='password' value={form.password} type="password" placeholder='Enter your Password' />
            </div>

            <button className='btn-submit'>
              Login
            </button>
          </div>
          <div className='create'>

          <p>If you don't have an account</p>
          <Link className='link' to="/signup">click here to create one</Link>
          </div>
        </div>
      </div>
    </>
  )
}

export default Login
