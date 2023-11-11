import React from 'react';
import { Routes, Route, BrowserRouter as Router } from "react-router-dom";
import Home from "./Routes/Home";
import Signup from './Routes/Signup';
import Login from './Routes/Login';  
import User_page from './Routes/User_page';      
import About from './Routes/About';
import Contact from './Routes/Contact';
import EditDBTransition from './Routes/EditDBTransition';
import Logout from './Routes/Logout';
import PatientData from './Routes/patientData';
import { AuthProvider } from './Routes/Authcontext'; 


function App() {
 
  return (
    <div>
      <Router>
      <AuthProvider>
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/editDB" element={<EditDBTransition/>} />
            <Route path="/about" element={<About/>} />
            <Route path="/login" element={<Login />} />
            <Route path="/Signup" element={<Signup />} />
            <Route path="/User_page" element={<User_page />} />
            <Route path="/contact" element={<Contact />} />
            <Route path="/patientData" element={<PatientData/>} />
            <Route path="/simulate" element={<User_page />} />
            <Route path="/logout" element={<Logout />} />
          </Routes>
          </AuthProvider>
        </Router>
    </div>
    
  );
}

export default App;




