import React from 'react'
import DeleteButton from "../components/DeleteButton"
import {Link} from "@reach/router"

const Pirate = ({ pirate, removePirate }) => {

    return (
        <div className="pirate">
            <Link to={`/pirate/${pirate._id}`}><img src={pirate.image} alt="pirate" /></Link>
            <h3>{pirate.name}</h3>
            <p>
                <Link to={`/pirate/${pirate._id}`}><button>View Pirate</button></Link>
                <DeleteButton pirateId={pirate._id} successCallback={() => removePirate(pirate._id)} />
            </p>
        </div>
    )
}

export default Pirate