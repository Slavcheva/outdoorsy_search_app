import './VehicleCard.css'

const VehicleCard = ({
                         vehicle
                     }) => {
    return(
        <li className="card">
                <div className="image">
                    <img src={vehicle.imageUrl} alt="vehicle"/>
                </div>
                <article className="content">
                    <p> {vehicle.name}</p>
                </article>
        </li>
    )
}

export default VehicleCard