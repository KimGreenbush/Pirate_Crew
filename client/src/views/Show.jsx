import React, {useState, useEffect} from "react"
import { Link } from "@reach/router"
import axios from "axios"

const Show = ({id, pirates, setPirates}) => {
    const [pirate, setPirate] = useState({})
    const [peg, setPeg] = useState()
    const [patch, setPatch] = useState()
    const [hook, setHook] = useState()

    useEffect(() => {
        axios.get(`http://localhost:9001/api/pirates/${id}`)
            .then(res => {
                setPirate(res.data)
                setPeg(res.data.peg)
                setPatch(res.data.patch)
                setHook(res.data.hook)
            })
            .catch(err => console.log("Error: ", err))
    }, [])

    // const updatePirate = () => {
    //     // console.log(e)
    //     axios.put(`http://localhost:9001/api/pirates/${id}`, {peg, patch, hook })
    //         .then((res) => {
    //             console.log(res)
    //         })
    //         .catch((err) => {
	// 			const errorRes = err.response.data
	// 			console.log(errorRes)
	// 			// setErrors(Object.keys(errorRes).map((error) => errorRes[error].message))
	// 		})
    // }

    const changePeg = () => {
        setPeg(!peg)
        axios.put(`http://localhost:9001/api/pirates/${id}`, {peg: !peg })
            .then((res) => {
                console.log(res)
            })
            .catch((err) => {
				const errorRes = err.response.data
				console.log(errorRes)
				// setErrors(Object.keys(errorRes).map((error) => errorRes[error].message))
			})
    }

    const changePatch = () => {
        setPatch(!patch)
        axios.put(`http://localhost:9001/api/pirates/${id}`, {patch: !patch })
            .then((res) => {
                console.log(res)
            })
            .catch((err) => {
				const errorRes = err.response.data
				console.log(errorRes)
				// setErrors(Object.keys(errorRes).map((error) => errorRes[error].message))
			})
    }

    const changeHook = () => {
        setHook(!hook)
        axios.put(`http://localhost:9001/api/pirates/${id}`, {hook: !hook })
            .then((res) => {
                console.log(res)
            })
            .catch((err) => {
				const errorRes = err.response.data
				console.log(errorRes)
				// setErrors(Object.keys(errorRes).map((error) => errorRes[error].message))
			})
    }

    return (
        <>
            <Link to="/pirates"><button>Back to All Pirates</button></Link>
            <h1>{pirate.name}</h1>
            <div>
                <img src={pirate.image} alt="pirate" />
                <p>{pirate.phrase}</p>
            </div>
            <div>
                <h3>About</h3>
                <p>Position: {pirate.position}</p>
                <p>Treasures: {pirate.chests}</p>
                <p>Peg Leg: {peg ? "Yes" : "No"} <button onClick={changePeg}>{peg ? "No" : "Yes"}</button></p>
                <p>Eye Patch: {patch ? "Yes" : "No"} <button onClick={changePatch} >{patch ? "No" : "Yes"}</button> </p>
                <p>Hook Hand: {hook ? "Yes" : "No"} <button onClick={changeHook} >{hook ? "No" : "Yes"}</button> </p>
            </div>
        </>
    )
}

export default Show