import React, { createContext, useEffect, useState } from 'react';

export const ViewDetailsFilmsContext = createContext();

export const ViewDetailsFilmsProvider = ({ children }) => {
  const [filmSelected, setFilmSelected] = useState({});

  useEffect(() => {
    if (localStorage.getItem('@SW:filmSelected')) {
      setFilmSelected(JSON.parse(localStorage.getItem('@SW:filmSelected')));
    }
  }, [])

  return (
    <ViewDetailsFilmsContext.Provider value={{ filmSelected, setFilmSelected }}>
      {children}
    </ViewDetailsFilmsContext.Provider>
  );
};
