import React from 'react'
import './style.css'
import { Link, useNavigate } from 'react-router-dom'
import {useState} from 'react'
import axios from 'axios'

export default function Login() {
    const history = useNavigate();
    const [email,setEmail] = useState("");
    const [password,setPassword] = useState("");

    async function submit(e){
        e.preventDefault();

        try{

            await axios.post("http://localhost:8000/",{
                email,password
            })
            .then(res=>{
                if(res.data==="exist"){
                    history("/home",{state:{id:email}})
                }
                else if(res.data==="not exist"){
                    alert("User have not sign up")
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
        <div className='login template d-flex  justify-content-evenly align-items-center vh-100 bg-success'>
            <div className='form_container p-5 rounded align-items-center bg-light'  >
                <form action="POST">
                    <h3 className='text-center'>Login</h3>
                    <div container="mb-2">
                        {/* <label htmlFor="email">Email</label> */}
                        <input type="email" name="email" onChange={(e) => { setEmail(e.target.value) }} className="form-control input-container" placeholder='Email' required />
                    </div>
                    <div container="mb-2">
                        {/* <label htmlFor="password">Password</label> */}
                        <input type="password" name="password" onChange={(e) => { setPassword(e.target.value) }} className="form-control input-container" placeholder='Password' required />
                    </div>
                    <div className="d-grid my-3">
                        <input onClick={submit} className="form-control input-container btn btn-outline-success" type="submit" value="Login"></input>
                    </div>
                    <p className='text-right'>
                        <a href="/" >Forgot Password?</a> <Link to="/registration" className='ms-3'>  Sign up</Link>
                    </p>
                </form>
            </div>
        </div>
    )
}
