import { useState } from "react"

export default function Player({name, symbol}) {
    const [isEditing, setIsEditing] = useState(false);
    const [playerName, setPlayerName] = useState({name});

    function handleEditClick() {
      setIsEditing((editing) => !editing);
    }

    function handleChange(event) {
        setPlayerName(event.target.value);
    }

    let player = <span className="player-name">{name}</span>

    if (isEditing) {
        player = <input type="text" required value={name} onChange={handleChange}/>
    }

    return (
        <li>
          <span className="player">
            {playerName}
            <span className="player-symbol">{symbol}</span>
          </span>
          <button onClick={handleEditClick}>{isEditing ? 'Save' : 'Edit'}</button>
        </li>
    );
}