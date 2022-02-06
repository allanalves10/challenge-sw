import { useContext } from "react";
import { ViewDetailsStarShipsContext } from "../contexts/viewDetailsStarShips";

export const useViewStarShips = () => useContext(ViewDetailsStarShipsContext);