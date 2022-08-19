import './App.css';
import React from "react";
import {getAll} from "./services";
import Vehicles from "./components/Vehicles/Vehicles";
import Pagination from './components/Pagination/Pagination'


export default function App() {
    const [vehicles, setVehicles] = React.useState([]);
    const [query, setQuery] = React.useState("")
    const [loading, setLoading] = React.useState(false)
    const [currentPage, setCurrentPage] = React.useState(1)
    const [vehiclesPerPage] = React.useState(5);

    React.useEffect(() => {
        getAll().then((vehicles) => {
            setLoading(true);
            setVehicles(vehicles);
            setLoading(false);
        });
    }, []);

    const indexOfLastVehicle = currentPage * vehiclesPerPage;
    const indexOfFirstVehicle = indexOfLastVehicle - vehiclesPerPage;
    let filteredVehicles = vehicles.filter(vehicle => vehicle.name.toLowerCase().includes(query.toLowerCase()))
    const currentVehicles = filteredVehicles.slice(indexOfFirstVehicle, indexOfLastVehicle);

    console.log(filteredVehicles)
        const paginate = (pageNumber) => setCurrentPage(pageNumber);


    return (
        <div className="app">
            <div className="searchBar">
                <input placeholder="Search" onChange={event => setQuery(event.target.value)}/>
            </div>
            {query ?
                <>
                    <Vehicles vehicles={currentVehicles} loading={loading}/>

                    <Pagination vehiclesPerPage={vehiclesPerPage}
                                allVehicles={filteredVehicles.length}
                                paginate={paginate}
                    />
                </>
                : <div/>
            }
        </div>
    );
}

