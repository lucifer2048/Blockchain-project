import React from 'react'
import { Link,useNavigate } from 'react-router-dom'
import { useState } from 'react';
import './style.css'
import axios from "axios"

export default function Registration() {

    const history=useNavigate();

    const [email,setEmail] = useState("");
    const [password,setPassword] = useState("");
    const [firstName,setFirstName] = useState("");
    const [lastName,setLastName] = useState("");
    const [phone,setPhone] = useState("");
    

    async function submit(e){
        e.preventDefault();

        try{

            await axios.post("http://localhost:8000/registration",{
                email,password,firstName,lastName,phone
            })
            .then(res=>{
                if(res.data==="exist"){
                    alert("User already exists")
                }
                else if(res.data==="not exist"){
                    history("/home",{state:{id:email}})
                }
            })
            .catch(e=>{
                alert("wrong details")
                console.log(e);
            })

        }
        catch(e){
            console.log(e);

        }

    }

    return (
    <div className='signup template d-flex justify-content-center align-items-center vh-100 bg-success'>
        <div className='form_container p-5 rounded bg-white'>
            <form action="POST">
                <h3 className='text-center'>Sign Up</h3>
                <div container="mb-2">
                    {/* <label htmlFor="fname">First Name</label> */}
                    <input type="text" onChange={(e) => { setFirstName(e.target.value) }} className="form-control input-container" placeholder='Firstname' required />
                </div>
                <div container="mb-2">
                    {/* <label htmlFor="lname">Last Name</label> */}
                    <input type="text" onChange={(e) => { setLastName(e.target.value) }} className="form-control input-container" placeholder='Lastname' required />
                </div>
                <div container="mb-2">
                    {/* <label htmlFor="mobilenum">Phone Number</label> */}
                    <input type="text" onChange={(e) => { setPhone(e.target.value) }} className="form-control input-container" placeholder='Phone number' required />
                </div>
                <div container="mb-2">
                    {/* <label htmlFor="email">Email</label> */}
                    <input type="email" onChange={(e) => { setEmail(e.target.value) }} className="form-control input-container" placeholder='Email' required />
                </div>  
                <div container="mb-2"> 
                    {/* <label htmlFor="password">Password</label> */}
                    <input type="password" onChange={(e) => { setPassword(e.target.value) }} className="form-control input-container" placeholder='Password' required />
                </div> 
                <div className="d-grid my-3">
                <input onClick={submit} className="form-control input-container btn btn-outline-success" type="submit" value="Sign Up"></input>
                </div>
                <p className='text-right'>
                    Already Registered<Link to="/" className='ms-1'>Login</Link>
                </p>
            </form>
        </div>
    </div>
  )
}
