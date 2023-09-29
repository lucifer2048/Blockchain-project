import React from 'react'
import { Link } from 'react-router-dom'
import './style.css'


export default function Registration() {
    
  return (
    <div className='signup template d-flex justify-content-center align-items-center vh-100 bg-dark'>
        <div className='form_container p-5 rounded bg-white'>
            <form>
                <h3 className='text-center'>Sign Up</h3>
                <div container="mb-2">
                    <label htmlFor="fname">First Name</label>
                    <input type="text" className="form-control" placeholder='Enter your Firstname' required />
                </div>
                <div container="mb-2">
                    <label htmlFor="lname">Last Name</label>
                    <input type="text" className="form-control" placeholder='Enter your Lastname' required />
                </div>
                <div container="mb-2">
                    <label htmlFor="mobilenum">Phone Number</label>
                    <input type="number" className="form-control" placeholder='Enter your Phone number' required />
                </div>
                <div container="mb-2">
                    <label htmlFor="email">Email</label>
                    <input type="email" className="form-control" placeholder='Enter your Email' required />
                </div>  
                <div container="mb-2"> 
                    <label htmlFor="password">Password</label>
                    <input type="password" className="form-control" placeholder='Enter your Password' required />
                </div> 
                <div className="d-grid my-3">
                    <button className="btn btn-success btn-md">Sign Up</button>
                </div>
                <p className='text-right'>
                    Already Registered<Link to="/" className='ms-1'>  Sign in</Link>
                </p>
            </form>
        </div>
    </div>
  )
}
