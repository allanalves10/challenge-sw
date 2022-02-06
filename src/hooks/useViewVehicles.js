import { useContext } from "react";
import { ViewDetailsVehiclesContext } from "../contexts/viewDetailsVehicles";

export const useViewVehicles = () => useContext(ViewDetailsVehiclesContext);