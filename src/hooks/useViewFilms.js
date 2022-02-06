import { useContext } from "react";
import { ViewDetailsFilmsContext } from "../contexts/viewDetailsFilms";

export const useViewFilms = () => useContext(ViewDetailsFilmsContext);