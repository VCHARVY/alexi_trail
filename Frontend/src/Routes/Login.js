import React from 'react'
import { useState,useEffect } from 'react'
import axios from 'axios'
import { useNavigate,Link} from 'react-router-dom'
import '../Styles/login.css'
function Login() {
  const [UserId, setUserId] = useState('')
  const [password, setPassword] = useState('')


  const navigate=useNavigate();
  async function login(e){
    if(!UserId || !password){
      alert('Email and Password fields have to be filled')
      return
    }


    e.preventDefault()
//     const loginData = {
//       UserId,
//       password
//     }
   
//     const config = {
//       headers: {
//         'Content-Type': 'application/json',
//       },
//     };

//     try{
//       const { data }=await axios.post(
//         'http://localhost:3000/api/user/login',loginData,config)
//         .catch((error)=>{
//           console.log(error);
//         });
//         console.log(data);
//         localStorage.setItem('userInfo',JSON.stringify(data));
//         navigate('/');
//     }
//     catch(e){
//       console.log(e)
//     }



try{

  await axios.post("http://localhost:3000/login",{
      UserId,password
  })
  .then(res=>{
      if(res.data=="exist"){
          navigate("/User_page",{state:{id:UserId}})
      }
      else if(res.data=="notexist"){
          alert("User have not signed up")
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
    <div className='box'>
      
      
        <div className='display'>
          <div className="header">
            <div className="position">Login</div>
          </div>
          <form action="POST">
          <div className='inputs'>
            <div className='input'>
              <input type="UserId" onChange={(e)=>{setUserId(e.target.value)}} placeholder='UserId'/>
            </div>
            <div className='input'>
              <input type="password" onChange={(e)=>{setPassword(e.target.value)}} placeholder='Password'/>
            </div>
            <div className='button'>
              <input type="submit" value="Login" onClick={login}/>
            </div>
           
         </div>
         </form>
        </div>
        <p className="text-white">
        Don't have an account? <Link to='/Signup'>Signup</Link>
      </p>
      </div>
    
  )
}

export default Login






   
