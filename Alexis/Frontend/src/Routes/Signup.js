import React from 'react'
import { useState } from 'react'
import axios from 'axios'
import { useNavigate, Link } from 'react-router-dom'
import '../Styles/Signup.css'

// const [shouldDisplayElement, setShouldDisplayElement] = useState(false);
function Signup() {
  
  const [name, setName] = useState('')
  const [email, setEmail] = useState('')
  const [Age, setAge] = useState('')
  const [Gender, setGender] = useState('')
  const [password, setPassword] = useState('')
  const [address, setaddress] = useState('')
  const [UserId, setUserId] = useState('')
  const [IsMedical_professional, setIsMedical_professional] = useState('')
  const navigate = useNavigate()
  
  const handleSignup = async () => {
    console.log("reached here1");
    if (!name.trim() || !email.trim() || !password.trim() || !address.trim() || !UserId.trim() || !Age.trim() || !Gender.trim()||!IsMedical_professional.trim()) {
      alert("Please Fill All The Details")
      return;
    }
    // navigate('/login');
    try {
      console.log("reached here2");
      const config = {
        headers: {
          'Content-Type': 'application/json',
        },
      };
      const SignupData = {
        name,
        email,
        password,
        address,
        UserId,
        Age,
        Gender,
        IsMedical_professional
      };
      const { data } = await axios.post('http://localhost:5000/api/user/signUp', SignupData,
        config).catch((error) => {
          console.log(error);
          
        });
      // setShouldDisplayElement(!shouldDisplayElement);
      console.log("reached here3");
      localStorage.setItem('userinfo', JSON.stringify(data));
      // console.log(data);
      console.log(data.IsMedical_professional)
      // if(data.IsMedical_professional==='true')
      //  {console.log("right here"); medico();}
      // login();
      navigate('/');
    }
    catch (error) {
      // Inside the catch block
      if (error.response && error.response.status === 409) {
        alert("Email Already Exists");
      } else if (error.response) {
        alert("An error occurred: " + error.response.data.message);
      } else {
        alert("Network Error. Please try again later.");
      }

    }
  }
  return (
    <div className='box1'>
      <div className='position'>SIGN UP</div>
      <div className='second'>
        <div className='input1'>
          <input type="text" onChange={(e) => setName(e.target.value)} placeholder='Name' />
        </div>
        <div className='input1'>
          <input type="text" onChange={(e) => setUserId(e.target.value)} placeholder='UserId' />
        </div>
        <div className='input1'>
          <input type="text" onChange={(e) => setGender(e.target.value)} placeholder='Gender' />
        </div>
        <div className='input1'>
          <input type="text" onChange={(e) => setEmail(e.target.value)} placeholder='Email ID' />
        </div>
        <div className='input1'>
          <input type="text" onChange={(e) => setPassword(e.target.value)} placeholder='Password' />
        </div>
        <div className='input1'>
          <input type="text" onChange={(e) => setaddress(e.target.value)} placeholder='address' />
        </div>
        <div className='input1'>
          <input type="text" onChange={(e) => setAge(e.target.value)} placeholder='age' />
        </div>
        <div className='input1'>
          <input type="text" onChange={(e) => setIsMedical_professional(e.target.value)} placeholder='IsMedical_professional' />
        </div>
       
      </div>
      <div className='button1'>
          <button onClick={handleSignup}>Sign Up</button>
     </div>
      <div className='text-white custom_class'>
        Already have an account? <Link to='/login'>login</Link>
      </div>
    </div >
  )
}
export default Signup