import React from 'react'
import { useState } from 'react'
import axios from 'axios'
import { useNavigate } from 'react-router-dom'
import '../Styles/User_page.css'
function User_page() {

  // const [Medicine_name, setMedicine_name] = useState('')
  const [inputList, setinputList] = useState([{ componentName: '', amountInMg: '' }]);

  const navigate = useNavigate()



  const handleinputchange = (e, index) => {
    const { name, value } = e.target;
    const list = [...inputList];
    list[index][name] = value;
    setinputList(list);
  }

  const handleremove = index => {
    const list = [...inputList];
    list.splice(index, 1);
    setinputList(list);
  }

  const handleaddclick = () => {
    setinputList([...inputList, { componentName: '', amountInMg: '' }]);
  }


  async function handle(e) {
    if (inputList.length === 0 ) {
      alert("Please Fill All The Details")
      return;
    }
    for(var i=0;i<inputList.length;i++)
    { var val=inputList[i];
      if (val.componentName.length===0|| val.amountInMg.length===0) {
        alert("Please Fill All The Details")
        console.log(i);
        return;
      }
      console.log(i);
      console.log(val.componentName);
      
    }


    e.preventDefault();
    const pageData = {
      inputList: inputList.map(item => ({
        componentName: item.componentName,
        amountInMg: item.amountInMg,
      })),
    };
    console.log(pageData);
    try {
      const { data } = await axios.post('http://localhost:5000/api/data/user/', pageData);
      console.log(data);
      navigate('/patientData');
    } catch (error) {
      console.log(error);
    }
  }


  return (
    <div className="box2">
      <div className="headerfile fw-bold mt-4 text-white">Enter Medicine component and dosage in mg</div>
      <div className="container">
        <div className="row">
          <div className="col-sm-12">


            {

              inputList.map((x, i) => {
                return (
                  <div className="row mb-3">
                    <div className="form-group col-md-4">
                      <input type="text" name="componentName" className="form-control" placeholder="Enter Component" onChange={e => handleinputchange(e, i)} />
                    </div>
                    <div className="form-group col-md-4">

                      <input type="text" name="amountInMg" className="form-control" placeholder="Enter amount" onChange={e => handleinputchange(e, i)} />
                    </div>
                    <div className="form-group col-md-2 mt-4">
                      {
                        inputList.length !== 1 &&
                        <button className="btn btn-danger mx-1" onClick={() => handleremove(i)} style={{ marginBottom: 10 }}>Remove</button>
                      }
                      {inputList.length - 1 === i &&
                        <button className="btn btn-success" onClick={handleaddclick}>Add More</button>
                      }
                    </div>
                  </div>
                );
              })}
            <button className="btn btn-success" onClick={handle}>Submit</button>

          </div>
        </div>
      </div>

    </div>
  );
}



export default User_page



