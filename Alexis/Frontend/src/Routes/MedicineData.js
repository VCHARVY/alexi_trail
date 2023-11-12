import React, { useState } from 'react';
import axios from 'axios';
import '../Styles/MedicineData.css'

const MedicineData = () => {
  const [medicineName, setMedicineName] = useState('');
  const [numComponents, setNumComponents] = useState(0);
  const [componentsData, setComponentsData] = useState([]);

  const handleInputChange = (index, field, value) => {
    const updatedComponentsData = [...componentsData];
    updatedComponentsData[index][field] = value;
    setComponentsData(updatedComponentsData);
  };

  const handleFormSubmit = async () => {
    if (!medicineName.trim() || numComponents <= 0) {
      alert('Please fill in all the details');
      return;
    }

    try {
      // Prepare the data to be sent to the backend
      const formData = {
        medicineName,
        components: componentsData,
      };

      // Make a POST request to the backend
      const { data } = await axios.post('http://localhost:5000/api/your-endpoint', formData);

      // Handle the response as needed
      console.log('Data successfully submitted:', data);
    } catch (error) {
      console.error('An error occurred:', error.message);
      // Handle errors as needed
    }
  };

  const generateComponentRows = () => {
    const rows = [];
    for (let i = 0; i < numComponents; i++) {
      rows.push(
        <div key={i} className="row">
          <input
            type="text"
            placeholder={`Component ${i + 1} Name`}
            onChange={(e) => handleInputChange(i, 'name', e.target.value)}
          />
          <input
            type="text"
            placeholder={`Component ${i + 1} Quantity`}
            onChange={(e) => handleInputChange(i, 'quantity', e.target.value)}
          />
        </div>
      );
    }
    return rows;
  };

  return (
    <div className="medicine-container">
      <div className="Med-title">MEDICINE FORM</div>
      <div className="inputtext">
        <input type="text" onChange={(e) => setMedicineName(e.target.value)} placeholder="Medicine Name" />
      </div>
      <div className="inputtext">
        <input
          type="number"
          onChange={(e) => setNumComponents(parseInt(e.target.value, 10))}
          placeholder="Number of Components"
        />
      </div>
      <div className="components-container">{generateComponentRows()}</div>
      <div className="Med-button">
        <button onClick={handleFormSubmit}>Submit</button>
      </div>
    </div>
  );
};

export default MedicineData;