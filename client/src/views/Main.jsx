import React, {useEffect} from "react"
import Pirates from "../components/Pirates"
import { Link } from "@reach/router"
import axios from "axios"

const Main = ({pirates, setPirates}) => {
    useEffect(() => {
        axios.get("http://localhost:9001/api/pirate")
            .then(res => setPirates(res.data))
            .catch(err => console.log("Error: ", err))
    }, [])

    return (
        <main>
            <header>
                <h1>Pirate Crew</h1>
                <img src="https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2Ftcibythelake.com%2Fwp-content%2Fuploads%2F2018%2F06%2Fpirate-ship-150x150.png&f=1&nofb=1" alt="pirate ship" />
            </header>
            <Link to="/pirate/new"><button>Add Pirate</button></Link>
            <Pirates pirates={pirates} setPirates={setPirates} />
        </main>
    )
}

export default Main