import React from 'react'
import {Link ,useNavigate} from 'react-router-dom';
function Navbar() {
    const isUserSignedIn=!!localStorage.getItem('token')
    const navigate=useNavigate();
    const handleSignout=()=>{
        localStorage.removeItem('token')
        navigate('/')
    }
  return (
    <div className='nav-bar'>
     <h2>MERN Authentication</h2> 
        <ul>
            {isUserSignedIn ? (
                <>
                  <button onClick={handleSignout} >LOGOUT</button>
                </>
            ):(
                      <>
                       <Link className='link-text' to='/'>LOGIN</Link>
                       <Link className='link-text' to='/signup'>REGISTER</Link>
                      </>
            )}
            
           
        </ul>
    </div>
  )
}

export default Navbar
