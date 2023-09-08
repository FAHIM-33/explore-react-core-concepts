import { useState } from "react"

export default function Team() {
    let [team, update] = useState(11)
    function addPlayer() {
        update(team + 1);
    }
    function removePlayer() {
        update(team - 1);
    }
    let teamStyle = {
        border: "2px solid red",
        borderRadius: '10px',
        padding: '2rem'

    }
    return (
        <div style={teamStyle}>
            <h2>Players:{team}</h2>
            <button onClick={addPlayer}>add Player</button>
            <button onClick={removePlayer}>Remove player</button>
        </div>
    )
}