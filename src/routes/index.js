import { Route, Routes as Router } from "react-router-dom";
import { ViewDetailsFilmsProvider } from "../contexts/viewDetailsFilms";
import { ViewDetailsProvider } from "../contexts/viewDetailsPerson";
import { ViewDetailsStarShipsProvider } from "../contexts/viewDetailsStarShips";
import { ViewDetailsVehiclesProvider } from "../contexts/viewDetailsVehicles";
import Details from "../pages/Details";
import Films from "../pages/Films";
import Home from "../pages/Home";
import StarShips from "../pages/StarShips";
import Vehicles from "../pages/Vehicles";

function Routes() {
    return(
        <ViewDetailsProvider>
            <ViewDetailsFilmsProvider>
                <ViewDetailsStarShipsProvider>
                    <ViewDetailsVehiclesProvider>
                        <Router>
                            <Route path="/" element={<Home />} />
                            <Route path="/details" element={<Details />} />
                            <Route path="/film" element={<Films />} />
                            <Route path="/starship" element={<StarShips />} />
                            <Route path="/vehicle" element={<Vehicles />} />
                        </Router>
                    </ViewDetailsVehiclesProvider>
                </ViewDetailsStarShipsProvider>
            </ViewDetailsFilmsProvider>
        </ViewDetailsProvider>
    )
}

export default Routes;