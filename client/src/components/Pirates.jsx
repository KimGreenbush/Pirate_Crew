import React from "react"
import Pirate from "./Pirate"

const Pirates = ({ pirates, setPirates}) => {
    const removePirate = pirateId => {
        setPirates(pirates.filter(pirate => pirate._id !== pirateId))
    }


    return (
        <div  className="pirates">
            {pirates? pirates.sort((a, b) => a.name.localeCompare(b.name)).map((pirate, idx) =>
                <Pirate key={idx} pirate={pirate} removePirate={removePirate}/>
            ) : ""}
        </div>
    )
}

export default Pirates