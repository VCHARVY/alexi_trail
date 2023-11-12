import React, { useState } from 'react';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';
import '../Styles/PermissableLevels.css'; // Make sure to replace with your actual stylesheet path

function PermissableLevels() {
  const [medicineName, setMedicineName] = useState('');
  const [organName, setOrganName] = useState('');
  const [Pdata, setData] = useState([
    ['', '', '', ''],
    ['', '', '', ''],
    ['', '', '', ''],
  ]);
  // Add more state variables as needed

  const navigate = useNavigate();
  const handleInputChange = (row, col, value) => {
    const newData = [...Pdata];
    newData[row][col] = value;
    setData(newData);
  };

  const handleFormSubmit = async () => {
    if (!medicineName.trim() || !organName.trim()) {
      alert('Please fill in all the details');
      return;
    }

    try {
      const formData = {
        medicineName,
        organName,
        Pdata,
        
      };

      const { data } = await axios.post('http://localhost:5000/api/permit', formData);
      
      localStorage.setItem('userinfo', JSON.stringify(data));
      navigate('/');
    } catch (error) {
      console.error('An error occurred:', error.message);
      
    }
  };

  return (
    <div className='medicinecontainer'>
      <div className='Medicine-title'>MEDICINE PERMISSABLE LEVELS</div>
      <div className='Medicine-inputs'>
        {/* Add or modify input fields as needed */}
        <div className='input'>
          <input type='text' onChange={(e) => setMedicineName(e.target.value)} placeholder='Medicine Name' />
        </div>
        <div className='input'>
          <input type='text' onChange={(e) => setOrganName(e.target.value)} placeholder='Organ Name' />
        </div>
       
        <div className='Medicine-table'>
        <table border='1'>
          <thead>
            <tr>
              <th></th>
              <th className='heading'>GOOD</th>
              <th className='heading'>MILD</th>
              <th className='heading'>MODERATE</th>
              <th className='heading'>SEVERE</th>
            </tr>
          </thead>
          <tbody>
            {Pdata.map((row, rowIndex) => (
              <tr key={rowIndex}>
              <td className='heading'>Age-group{rowIndex + 1}</td>
                {row.map((col, colIndex) => (
                  <td key={colIndex}>
                    <input
                      type='text'
                      value={col}
                      onChange={(e) => handleInputChange(rowIndex, colIndex, e.target.value)}
                      placeholder={`Row ${rowIndex + 1}, Col ${colIndex + 1}`}
                    />
                  </td>
                ))}
              </tr>
            ))}
          </tbody>
        </table>
      </div>
      </div>
      <div className='Medicine-button'>
        <button onClick={handleFormSubmit}>Submit</button>
      </div>
    </div>
  );
}

export default PermissableLevels;