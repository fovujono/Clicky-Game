import React from "react";
import "./style.css";

function Card(props) {
    return (
    <div className ="card">
        <div classname ="img-container" >
           <img alt={props.name} src={props.image}/>
        </div>
        <div className ="content">
            <h3>{props.name}</h3>        
        </div>
    </div> 
    );
}

export default Card;