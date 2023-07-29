import React from 'react'
import { Link } from "react-router-dom";

function Signup(){

  const handleSubmit=(event)=>{
    event.preventDefault()
    
  } 
  return (
    <div className='d-flex justify-content-center align-items-center bg-primary vh-100'>
    <div className='bg-white p-3 w-25 rounded'>
        <form action='' onSubmit={handleSubmit}>
            <div className='mb-3'>
            <label htmlFor='name'>Name</label>
            <input type='name' placeholder='Full name' className='form-control' />
            </div>
            <div className='mb-3'>
            <label htmlFor='tel'>contact</label>
            <input type='tel' placeholder='mobile number' className='form-control' />
            </div>
            <div className='mb-3'>
            <label htmlFor='email'>Email</label>
            <input type='email' placeholder='email' className='form-control' />
            </div>
            <div className='mb-3'>
            <label htmlFor='password'>passward</label>
            <input type='password' placeholder='password' className='form-control'/>
            </div>
            <button to='/Success' type='submit' className='btn btn-success w-100 mb-3'>Sign-UP</button>
            <Link to='/' className='btn btn-success w-100 bg-secondary'>login</Link>
            
        </form>
    </div>   
</div>
  )
}

export default Signup