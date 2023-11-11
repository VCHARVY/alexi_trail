import React, { createContext, useContext, useState } from 'react';

const AuthContext = createContext();

export const AuthProvider = ({ children }) => {
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const [isMedicalProfessional, setIsMedicalProfessional] = useState(false);


  const logincheck = () => {
    setIsLoggedIn(true);
  };
  const medico=()=>{
    setIsMedicalProfessional(true);
  }

  const logoutcheck = () => {
    setIsLoggedIn(false);
    setIsMedicalProfessional(false);
  };

  return (
    <AuthContext.Provider value={{ isLoggedIn,isMedicalProfessional,medico, logincheck, logoutcheck }}>
      {children}
    </AuthContext.Provider>
  );
};

export const useAuth = () => useContext(AuthContext);