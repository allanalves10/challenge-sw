import { Route, Routes as Router } from "react-router-dom";
import { ViewDetailsProvider } from "../contexts/viewDetailsPerson";
import Details from "../pages/Details";
import Home from "../pages/Home";

function Routes() {
    return(
        <ViewDetailsProvider>
            <Router>
                <Route path="/" element={<Home />} />
                <Route path="/details" element={<Details />} />
            </Router>
        </ViewDetailsProvider>
    )
}

export default Routes;