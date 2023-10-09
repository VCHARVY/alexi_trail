import React from 'react'
import { useState} from 'react'
import axios from 'axios'
import { useNavigate} from 'react-router-dom'
import '../Styles/User_page.css'
function User_page() {

  const [Medicine_name, setMedicine_name] = useState('')
  const [inputList, setinputList]= useState([{ComponentName:'', amount_mg:''}]);

  const navigate=useNavigate()
  

   
    const handleinputchange=(e, index)=>{
      const {name, value}= e.target;
      const list= [...inputList];
      list[index][name]= value;
      setinputList(list);
   
    }
    
    const handleremove= index=>{
      const list=[...inputList];
      list.splice(index,1);
      setinputList(list);
    }
   
    const handleaddclick=()=>{ 
      setinputList([...inputList, {ComponentName:'', amount_mg:''}]);
    }
 
  
  async function User_page(e){
    if (inputList.length==0||inputList.length==1) {
          alert("Please Fill All The Details")
          return;
        }


    e.preventDefault()
    const User_page_data = {
     inputList
      
    }
   
    const config = {
      headers: {
        'Content-Type': 'application/json',
      },
    };

    try{
      const { data }=await axios.post(
        'http://localhost:3000/api/user/User_page',User_page_data,config)
        .catch((error)=>{
          console.log(error);
        });
        console.log(data);
        localStorage.setItem('userInfo',JSON.stringify(data));
        navigate('/');
    }
    catch(e){
      console.log(e)
    }
  }

 
return (
    <div className="box2">
    <div className="container">
        <div className="row">
        <div className="col-sm-12">
         <h5 className="mt-3 mb-4 fw-bold text-white">Enter Medicine component and dosage in mg</h5>
            
            { 
            inputList.map( (x,i)=>{
              return(
              <div className="row mb-3">
                 <div class="form-group col-md-4">
                 <label className="text-white" >Component Name</label>
                  <input type="text"   name="firstName" class="form-control"  placeholder="Enter Component" onChange={ e=>handleinputchange(e,i)} />
               </div>
               <div class="form-group col-md-4">
               <label className="text-white" >Amount (in mg)</label>
                  <input type="text"  name="lastName" class="form-control"   placeholder="Enter amount" onChange={ e=>handleinputchange(e,i) }/>
               </div>
               <div class="form-group col-md-2 mt-4">
               {
                  inputList.length!==1 &&
                  <button  className="btn btn-danger mx-1" onClick={()=> handleremove(i)} style={{marginBottom: 10}}>Remove</button>
               }
               { inputList.length-1===i &&
               <button  className="btn btn-success" onClick={ handleaddclick}>Add More</button>
               }
               </div>
            </div>
              );
             } )} 
             <button  className="btn btn-success" onClick={ User_page}>Submit</button>
                
       </div>
     </div>
    </div>

    </div>
  );
}



export default User_page




