import { Route, Routes as Router } from "react-router-dom";
import Details from "../pages/Details";
import Home from "../pages/Home";

function Routes() {
    return(
        <Router>
            <Route path="/" element={<Home />} />
            <Route path="/details" element={<Details />} />
        </Router>
    )
}

export default Routes;