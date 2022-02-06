import React, { createContext, useEffect, useState } from 'react';

export const ViewDetailsVehiclesContext = createContext();

export const ViewDetailsVehiclesProvider = ({ children }) => {
  const [vehicleSelected, setVehicleSelected] = useState({});

  useEffect(() => {
    if (localStorage.getItem('@SW:vehicleSelected')) {
      setVehicleSelected(JSON.parse(localStorage.getItem('@SW:vehicleSelected')));
    }
  }, [])

  return (
    <ViewDetailsVehiclesContext.Provider value={{ vehicleSelected, setVehicleSelected }}>
      {children}
    </ViewDetailsVehiclesContext.Provider>
  );
};
