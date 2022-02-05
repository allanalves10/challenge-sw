import { useContext } from "react";
import { ViewDetailsContext } from "../contexts/viewDetailsPerson";

export const useViewDetails = () => useContext(ViewDetailsContext);