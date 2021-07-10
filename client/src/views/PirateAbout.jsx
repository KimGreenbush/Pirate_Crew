import React, {useState, useEffect} from "react"
import { Link } from "@reach/router"
import axios from "axios"

const Show = ({id}) => {
    const [pirate, setPirate] = useState({})
    const [peg, setPeg] = useState()
    const [patch, setPatch] = useState()
    const [hook, setHook] = useState()

    useEffect(() => {
        axios.get(`http://localhost:9001/api/pirate/${id}`)
            .then(res => {
                setPirate(res.data)
                setPeg(res.data.peg)
                setPatch(res.data.patch)
                setHook(res.data.hook)
            })
            .catch(err => console.log("Error: ", err))
    }, [])

    const changePeg = () => {
        setPeg(!peg)
        axios.put(`http://localhost:9001/api/pirate/${id}`, {peg: !peg })
            .then((res) => {
                console.log(res)
            })
            .catch((err) => {
				const errorRes = err.response.data
				console.log(errorRes)
			})
    }

    const changePatch = () => {
        setPatch(!patch)
        axios.put(`http://localhost:9001/api/pirate/${id}`, {patch: !patch })
            .then((res) => {
                console.log(res)
            })
            .catch((err) => {
				const errorRes = err.response.data
				console.log(errorRes)
			})
    }

    const changeHook = () => {
        setHook(!hook)
        axios.put(`http://localhost:9001/api/pirate/${id}`, {hook: !hook })
            .then((res) => {
                console.log(res)
            })
            .catch((err) => {
				const errorRes = err.response.data
				console.log(errorRes)
			})
    }

    return (
        <div className="pirate-about">
            <Link to="/pirate"><button>Back to All Pirates</button></Link>
            <h1>{pirate.name}</h1>
            <div className="column">
                <figure>
                    <img src={pirate.image} alt="pirate" />
                    <figcaption>"{pirate.phrase}" - {pirate.name}</figcaption>
                </figure>
            </div>
            <div className="column">
                <h2>About: </h2>
                <p>Position: {pirate.position}</p>
                <p>Treasures: {pirate.chests}</p>
                <p>
                    Peg Leg: {peg ? "Yes" : "No"}
                    <button onClick={changePeg}>{peg ? "No" : "Yes"}</button>
                </p>
                <p>
                    Eye Patch: {patch ? "Yes" : "No"}
                    <button onClick={changePatch} >{patch ? "No" : "Yes"}</button>
                </p>
                <p>
                    Hook Hand: {hook ? "Yes" : "No"}
                    <button onClick={changeHook} >{hook ? "No" : "Yes"}</button>
                </p>
            </div>
        </div >
    )
}

export default Show