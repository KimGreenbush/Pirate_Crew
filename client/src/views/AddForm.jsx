import React from "react"
import {Link} from "@reach/router"
import Form from "../components/Form"

const AddForm = ({ onSubmitProp, errors, setErrors }) => {

    const clearForm = () => {
        setErrors([])
    }

    return (
        <div>
            <h1>Add Pirate</h1>
            <Link to="/pirate" onClick={clearForm} ><button>Cancel</button></Link>
            <Form onSubmitProp={onSubmitProp} initialName="" errors={errors} />
        </div>
    )
}

export default AddForm