import React from 'react'
import{ useEffect, useState } from 'react'
import { useNavigate } from 'react-router-dom';
import axios from 'axios';

function Login() {
    const [username,setUsername]=useState('');
    const [password,setPassword]=useState('');
    const navigate=useNavigate();
    useEffect(()=>{
        fetchUser();
    },[])
    const fetchUser=()=>{
        axios.get('http://localhost:4000/register')
    }
    const handleLogin=async(event)=>{ 
        event.preventDefault();
        try{
            const response = await axios.post('http://localhost:4000/login',{username,password})
            const token= await response.data.token;
            alert('Login successful')
            setPassword('')
            setUsername('')
            navigate('/account');
            window.location.reload()
            localStorage.setItem('token',token)
            
            
        }
        catch(error){
                   console.log('Error in Login');
        }
    }
  return (
    <div>
         <form  onSubmit={handleLogin} className='Form-main'>
            <h2>LOGIN</h2>
            <input type="text" value={username} onChange={(e)=>setUsername(e.target.value)} placeholder='Enter Username...' required />
            <input type="password" value={password} onChange={(e)=>setPassword(e.target.value)} placeholder='Enter Password...' required/>
            <button type='submit'>LOGIN</button>
        </form>
    </div>
  )
}

export default Login