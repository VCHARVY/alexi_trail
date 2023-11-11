//to be workedout
import React from 'react'
import { useState,useEffect } from 'react'
import axios from 'axios'
import { useNavigate, Link } from 'react-router-dom'
import '../Styles/login.css'
import { useAuth } from './Authcontext';
function Logout() {
  const { logoutcheck} = useAuth();
   const navigate=useNavigate();
   async function logout(e){
    
      logoutcheck();
        navigate('/');
    }
return (
  <div className='box'>
    
    
      <div className='display'>
        <div className="header">
          <div className="position">Logout</div>
        </div>
        
        
          
          <div className="info">
            <p>You sure to logout?click to confirm</p>
          </div>
          <div className='button3'>
            <input type='submit' onClick={logout}/>
          </div>
          </div>
  </div>
 )
}

export default Logout
