import React, { createContext, useEffect, useState } from 'react';

export const ViewDetailsContext = createContext();

export const ViewDetailsProvider = ({ children }) => {
  const [personSelected, setPersonSelected] = useState({});

  useEffect(() => {
    if (localStorage.getItem('@SW:personSelected')) {
      setPersonSelected(JSON.parse(localStorage.getItem('@SW:personSelected')));
    }
  }, [])

  return (
    <ViewDetailsContext.Provider value={{ personSelected, setPersonSelected }}>
      {children}
    </ViewDetailsContext.Provider>
  );
};
