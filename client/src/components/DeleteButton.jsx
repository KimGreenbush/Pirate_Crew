import React from "react"
import axios from "axios"

const DeleteButton = ({pirateId, successCallback}) => {
    const deletePirate = e => {
        axios.delete(`http://localhost:9001/api/pirate/${pirateId}`)
            .then(res => successCallback())
    }

    return (
        <button onClick={deletePirate}>Walk the Plank</button>
    )
}

export default DeleteButton