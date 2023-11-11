
import React from 'react';
import { Link } from 'react-router-dom';
import '../Styles/EditDBTransition.css';
const EditDBTransition = () => {
  return (
    <div className='background'>
      <h1 className='text-white'>DATABASES</h1>
      
      <Link to="/MedicineData">
        <button className='choice'>MEDICINE DATA</button>
      </Link>
     
      
      <Link to="/PermissableLevel">
        <button className='choice'>PERMISSIBLE LEVELS DATA</button>
      </Link>
     
    </div>
  );
};

export default EditDBTransition;