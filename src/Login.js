import React, { useState } from 'react'
import { Link } from "react-router-dom";

const Login = () => {

  // const [values,setValues] = useState({
  //   email : "",
  //   passward: "",
  // })
  
  // const handleSubmit=(event) => {
  //     event.preventDefault();
  //   }
  return (
 
    <div className='d-flex justify-content-center align-items-center bg-primary vh-100'>
        <div className='bg-white p-3 w-25 rounded'>
            <form action='' >
                <div className='mb-3'>
                <label htmlFor='email'>Email</label>
                <input type='email' placeholder='email'  className='form-control' />
                </div>
                <div className='mb-3'>
                <label htmlFor='passward'>passward</label>
                <input type='passward' placeholder='passward'  className='form-control'/>
                </div>
                <button type='submit' to='/Success' className='btn btn-success w-100'>Login In</button>
                <p>not have an account .....<br/>
                create one here</p>
                <Link to='/Signup' className='btn btn-default border bg-info w-100'>Create Account</Link>
            </form>
        </div>   
    </div>
   
  )
}

export default Login