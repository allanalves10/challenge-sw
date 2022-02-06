import React, { createContext, useEffect, useState } from 'react';

export const ViewDetailsStarShipsContext = createContext();

export const ViewDetailsStarShipsProvider = ({ children }) => {
  const [starShipSelected, setStarShipSelected] = useState({});

  useEffect(() => {
    if (localStorage.getItem('@SW:starShipSelected')) {
      setStarShipSelected(JSON.parse(localStorage.getItem('@SW:starShipSelected')));
    }
  }, [])

  return (
    <ViewDetailsStarShipsContext.Provider value={{ starShipSelected, setStarShipSelected }}>
      {children}
    </ViewDetailsStarShipsContext.Provider>
  );
};
