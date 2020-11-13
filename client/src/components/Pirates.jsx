import React from "react"
import DeleteButton from "../components/DeleteButton"
import {Link} from "@reach/router"

const Pirates = ({ pirates, setPirates}) => {
    const removePirate = pirateId => {
        setPirates(pirates.filter(pirate => pirate._id !== pirateId))
    }

    const style = {
        width: "100px"
    }

    return (
        <>
            {pirates.sort((a, b) => a.name.localeCompare(b.name)).map((pirate, idx) =>
                <div key={idx}>
                    <img src={pirate.image} style={style} alt="pirate"/>
                    <p>{pirate.name}</p>
                    <p><Link to={`/pirate/${pirate._id}`}><button>View Pirate</button></Link> <DeleteButton pirateId={pirate._id} successCallback={() => removePirate(pirate._id)} /></p>
                </div>)}
        </>
    )
}

export default Pirates