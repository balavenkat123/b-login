import React, { useState } from 'react'
import { Link } from "react-router-dom";
import Validation from './loginValid';


const Login = () => {

  const [values,setValues] = useState({
    email : "",
    passward: "",
  })
  const[errors,setErrors] = useState({

  })
  const handleInput =(event)=>{
    setValues(prev => ({...prev,[event.target.name]:[event.target.value]}))
  }

  const handleSubmit=(event) => {
      event.preventDefault();
      setErrors(Validation(values));
    }
  return (
 
    <div className='d-flex justify-content-center align-items-center bg-secondary vh-100'>
        <div className='bg-white p-3 w-25 rounded'>
            <form action='' onSubmit={handleSubmit}>
                <div className='mb-3'>
                <label htmlFor='email'>Email</label>
                <input name='email' type='email' placeholder='email'  onChange={handleInput} className='form-control' />
                {errors.email && <span className='text-danger'>{errors.email}</span>}
                </div>
                <div className='mb-3'>
                <label htmlFor='password'>password</label>
                <input name='password' type='password' placeholder='password' onChange={handleInput} className='form-control'/>
                {errors.password && <span className='text-danger'>{errors.password}</span>}
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