import React, { useState } from "react";
import { Router, Redirect, navigate } from "@reach/router";
import axios from "axios";
import Main from "./views/Main";
import AddForm from "./views/AddForm";
import PirateAbout from "./views/PirateAbout";
import "./App.css";

function App() {
    const [pirates, setPirates] = useState([]);
	const [errors, setErrors] = useState([]);

	const createPirate = (pirate) => {
		axios.post("http://localhost:9001/api/pirate/new", pirate)
			.then((res) => {
				setPirates([...pirates, res.data])
				setErrors([])
				navigate("/pirate")
			})
			.catch((err) => {
				const errorRes = err.response.data.errors;
				setErrors(Object.keys(errorRes).map((error) => errorRes[error].message))
			})
	}

	return (
		<div className="App">
			<Router>
				<Redirect from="/" to="/pirate"  noThrow />
				<Main path="/pirate" pirates={pirates} setPirates={setPirates} />
				<AddForm path="/pirate/new" onSubmitProp={createPirate} errors={errors} setErrors={setErrors} />
				<PirateAbout path="/pirate/:id" />
			</Router>
		</div>
	);
}

export default App;
