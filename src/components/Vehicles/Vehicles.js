import React from "react";
import VehicleCard from "../VehicleCard/VehicleCard.js";
import './Vehicles.css'

const Vehicles = ({
                      vehicles,
                      loading
                  }) => {
    if (loading) {
        return <h2>Loading</h2>
    }

    return (
        <ul className="vehiclesList">
            {vehicles.map(vehicle =>
                    <VehicleCard key={vehicle._id} vehicle={vehicle}/>
                )}
        </ul>
    )
}

export default Vehicles