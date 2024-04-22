import { useState } from "react";

export default function Player({name, symbol, isActive, onChangeName}){
    const[isEditing, setIsEditing] = useState(false);
    const[playerName, setPlayerName] = useState(name);
    function handleEdit(){
        setIsEditing(prevState => !prevState);
        if(isEditing){
            onChangeName(symbol, playerName);
        }
    }

    function handleChange(event){
        setPlayerName(event.target.value);
    }

    let playerNameContent = (<span className="player-name">{playerName}</span>);
    let buttonCaption = "Edit";
    if(isEditing){
        playerNameContent = (<input type="text" required value={playerName} onChange={handleChange}></input>);
        buttonCaption = "Save";
    }
    return (
        <li className={isActive?"active":undefined}>
            <span className = "player">
            {playerNameContent}
            <span className="player-symbol">{symbol}</span>
            </span>
           <button onClick={handleEdit}>{buttonCaption}</button>
          </li>
    );
}