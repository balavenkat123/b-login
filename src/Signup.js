import React from 'react'
import { Link } from "react-router-dom";

function Signup(){
  return (
    <div className='d-flex justify-content-center align-items-center bg-primary vh-100'>
    <div className='bg-white p-3 w-25 rounded'>
        <form action=''>
            <div className='mb-3'>
            <label htmlFor='name'>Name</label>
            <input type='email' placeholder='Full name' className='form-control' />
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
            <label htmlFor='passward'>passward</label>
            <input type='passward' placeholder='passward' className='form-control'/>
            </div>
            <Link to='/Success' className='btn btn-success w-100 mb-3'>Sign-UP</Link>
            <Link to='/' className='btn btn-success w-100 bg-secondary'>login</Link>
            
        </form>
    </div>   
</div>
  )
}

export default Signup