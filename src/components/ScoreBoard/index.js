import React from "react";
import "./style.css";

function ScoreBoard(props){
    return (
        <div className="score-board">{props.children}
        </div>
    )
}

export default ScoreBoard;