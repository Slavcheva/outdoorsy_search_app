import React from "react";
import VehicleCard from "../VehicleCard/VehicleCard.js";
import './Vehicles.css'

const Vehicles = ({
                      vehicles,
                      query
                  }) => {

    return (
        <ul className="vehiclesList">
            {vehicles.filter(vehicle => {
                if (query === '') {
                    return vehicle;
                } else if (vehicle.name.toLowerCase().includes(query.toLowerCase())) {
                    return vehicle;
                }
            }).map(vehicle =>
                <VehicleCard key={vehicle._id} vehicle={vehicle}/>
            )}
        </ul>
    )
}

export default Vehicles