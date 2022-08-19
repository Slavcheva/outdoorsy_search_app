import './VehicleCard.css'

const VehicleCard = ({
                         vehicle
                     }) => {
    return (
        <li className="card">
            {/*<a className="card-link" href="#">*/}
                <div className="image">
                    <img src={vehicle.imageUrl} alt="vehicle"/>
                </div>
                <article className="content">
                    <p> {vehicle.name}</p>
                </article>
            {/*</a>*/}
        </li>
    )
}

export default VehicleCard