import React from 'react'
import './style.css'
import { Link } from 'react-router-dom'

export default function Login() {
  return (
    <div className='login template d-flex  justify-content-center align-items-center vh-100 bg-dark'>
        <div className='form_container p-5 rounded bg-white'  >
            <form>
                <h3 className='text-center'>Sign in</h3>
                <div container="mb-2">
                    <label htmlFor="email">Email</label>
                    <input type="email" className="form-control" placeholder='Enter your Email' required />
                </div>  
                <div container="mb-2"> 
                    <label htmlFor="password">Password</label>
                    <input type="password" className="form-control" placeholder='Enter your Password' required />
                </div> 
                <div className="d-grid my-3">
                    <button className="btn btn-success btn-md">Sign in</button>
                </div>
                <p className='text-right'>
                    Forgot <a href="/" >Password?</a> <Link to="/registration" className='ms-3'>  Sign up</Link>
                </p>
            </form>
        </div>
    </div>
  )
}
