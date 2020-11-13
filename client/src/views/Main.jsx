import React, {useEffect} from "react"
import Pirates from "../components/Pirates"
import { Link } from "@reach/router"
import axios from "axios"

const Main = ({pirates, setPirates}) => {
    useEffect(() => {
        axios.get("http://localhost:9001/api/pirates")
            .then(res => setPirates(res.data))
            .catch(err => console.log("Error: ", err))
    }, [])

    return (
        <>
            <h1>Pirate Crew</h1>
            <Link to="/pirate/new"><button>Add Pirate</button></Link>
            <Pirates pirates={pirates} setPirates={setPirates} />
        </>
    )
}

export default Main