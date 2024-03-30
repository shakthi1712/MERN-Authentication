import React, { useEffect, useState } from 'react'
import { useNavigate } from 'react-router-dom';
import axios from 'axios';

function SignUp() {
    const [email,setEmail]=useState('');
    const [username,setUsername]=useState('');
    const [password,setPassword]=useState('');
    const navigate=useNavigate();

  
    useEffect(()=>{
        fetchUser();
    },[])
    const fetchUser=()=>{
        axios.get('http://localhost:4000/register')
    }
    const handleRegister=((event)=>{
        event.preventDefault();
        axios.post('http://localhost:4000/register',{email,username,password})
        .then(()=>{
            setEmail('')
            setUsername('')
            setPassword('') 
            fetchUser()
            navigate('/login')

        })


    })
  return (
    <div className='signup-main'>
        <form action="" onSubmit={handleRegister} className='Form-main' >
            <h2>REGISTER USER</h2>
          
            <input type="text" value={username} onChange={(e)=>setUsername(e.target.value)} placeholder='Enter Username...' />
            <input type="text" value={email} onChange={(e)=>setEmail(e.target.value)} placeholder='Enter Email-id...'/>
            <input type="password" value={password} onChange={(e)=>setPassword(e.target.value)} placeholder='Enter Password...' />
            <button type='submit' className='btn'>REGISTER</button>
        </form>
    </div>
  )
}

export default SignUp