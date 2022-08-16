import './App.css';
import Vehicles from "./components/Vehicles/Vehicles.js";
import React from "react";
import {getAll} from "./services";

function App() {
    const [vehicles, setVehicles] = React.useState([]);
    const [query, setQuery] = React.useState("")

    React.useEffect(() => {
        getAll().then((vehicles) => {
            setVehicles(vehicles);
        });
    }, []);

    return (
        <div className="app">
            <div className="searchBar">
                <input placeholder="Search" onChange={event => setQuery(event.target.value)}/>
            </div>
            <Vehicles vehicles={vehicles} query={query}/>
        </div>
    );
}

export default App;
