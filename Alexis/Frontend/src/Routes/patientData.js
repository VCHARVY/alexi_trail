import React from 'react'
import { useState } from 'react'
import axios from 'axios'
import { useNavigate, Link } from 'react-router-dom'
import '../Styles/patientData.css'


function PatientData() {
  

  const [Age, setAge] = useState('')
  const [Gender, setGender] = useState('')
  const [Height, setHeight] = useState('')
  const [Weight, setWeight] = useState('')
  const [occupation, setoccupation] = useState('')
 
  const navigate = useNavigate()
  
  const handlepatient = async () => {
    console.log("reached here1");
    if ( !Height.trim() || !Weight.trim() || !Age.trim() || !Gender.trim()||!occupation.trim()) {
      alert("Please Fill All The Details")
      return;
    }
   
    try {
      console.log("reached here2");
      // const config = {
      //   headers: {
      //     'Content-Type': 'application/json',
      //   },
      // };
      const patientData = {
       
        Height,
        Weight,
        Gender,
        Age,
        occupation
      };
      const { data } = await axios.post('http://localhost:5000/api/data/patient/', patientData)
        .catch((error) => {
          console.log(error);
          
        });
     
      console.log("reached here3");
      localStorage.setItem('userinfo', JSON.stringify(data));
    
      navigate('/Models');
    }
    catch (error) {
      
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
    <div className='box3'>
      <div className='position'>PATIENT DETAILS</div>
      <div className='second2'>
       
        <div className='input3'>
          <input type="text" onChange={(e) => setGender(e.target.value)} placeholder='Gender' />
        </div>
        <div className='input3'>
          <input type="text" onChange={(e) => setHeight(e.target.value)} placeholder='Height' />
        </div>
        <div className='input3'>
          <input type="text" onChange={(e) => setWeight(e.target.value)} placeholder='Weight' />
        </div>
        
        <div className='input3'>
          <input type="text" onChange={(e) => setAge(e.target.value)} placeholder='age' />
        </div>
        <div className='input3'>
          <input type="text" onChange={(e) => setoccupation(e.target.value)} placeholder='occupation' />
        </div>
       
      </div>
      <div className='button3'>
          <button onClick={handlepatient}>Simulate</button>
     </div>
     
    </div>
  )
}
export default PatientData