import React, { useState } from "react"

const Form = ({initialName, onSubmitProp, errors}) => {
    const [name, setName] = useState(initialName)
    const [image, setImage] = useState("")
    const [chests, setChests] = useState(0)
    const [phrase, setPhrase] = useState("")
    const [position, setPosition] = useState("Captain")
    const [peg, setPeg] = useState(true)
    const [patch, setPatch] = useState(true)
    const [hook, setHook] = useState(true)

    const positions = ["Captain", "First Mate", "Quarter Master", "Boatswain", "Powder Monkey"]

    const submitHandler = e => {
        e.preventDefault()
        onSubmitProp({ name, image, chests, phrase, position, peg, patch, hook })
    }

    return (
        <div  className="pirate-form">
            { errors? errors.map((error, idx) => <p key={idx}>{error}</p>) : ""}
            <form onSubmit={submitHandler}>
                <label htmlFor="name">Pirate Name: </label>
                <input type="text" name="name" id="name" value={name} onChange={e => setName(e.target.value)} />
                <label htmlFor="image">Image Url: </label>
                <input type="text" name="image" id="image" value={image} onChange={e => setImage(e.target.value)} />
                <label htmlFor="chests"># of Treasure Chests:</label>
                <input type="number" name="chests" id="chests" value={chests} onChange={e => setChests(e.target.value)} />
                <label htmlFor="phrase">Pirate Catch Phrase:</label>
                <textarea value={phrase} onChange={e => setPhrase(e.target.value)} />
                <label htmlFor="position">Crew Position:</label>
                <select value={position} onChange={e => setPosition(e.target.value)}>
                    {positions.map((pos, idx) => <option key={idx} value={pos}>{pos}</option>)}
                </select>
                <label htmlFor="peg">Peg Leg</label>
                <input type="checkbox" checked={peg} onChange={e => setPeg(e.target.checked)}/>
                <label htmlFor="peg">Eye Patch</label>
                <input type="checkbox" checked={patch} onChange={e => setPatch(e.target.checked)}/>
                <label htmlFor="peg">Hook Hand</label>
                <input type="checkbox" checked={hook} onChange={e => setHook(e.target.checked)}/>
                <button>Add Pirate</button>
            </form>
        </div>
    )
}

export default Form