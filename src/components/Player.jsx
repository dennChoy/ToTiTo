import { useState } from "react";

export default function Player({initialName, symbol, isActive, onChangeName}) {
    const [playerName, setPlayerName] = useState(initialName)
    const [isEditing, setIsEditing] = useState(false);

    let playerInput = <span className="player-name" >{ playerName} </span>;

    function isEditingHandler (){
        setIsEditing(editing => !editing);  
        if(isEditing){
          onChangeName(symbol, playerName);
        }
    }

    function playerNameHandler(event){
        setPlayerName(event.target.value);
    }

    if(isEditing){
        playerInput = <input type="text" onChange={playerNameHandler} value={playerName} required></input>
    }

   return (
    <li className={isActive ? 'active': undefined}>
      <span className="player">
        {playerInput}
        <span className="player-symbol">{symbol}</span>
      </span>
      <button onClick={isEditingHandler}>{isEditing ? 'Save' : 'Edit'}</button>
    </li>
  );
}
