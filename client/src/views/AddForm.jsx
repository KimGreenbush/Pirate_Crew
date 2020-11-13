import React from "react"
import {Link} from "@reach/router"
import Form from "../components/Form"

const AddForm = ({ onSubmitProp, errors, setErrors }) => {

    const clearForm = () => {
        setErrors([])
    }

    return (
        <>
            <h1>Add Pirate</h1>
            <Link to="/pirates" onClick={clearForm} ><button>Cancel</button></Link>
            <Form onSubmitProp={onSubmitProp} initialName="" errors={errors} />
        </>
    )
}

export default AddForm