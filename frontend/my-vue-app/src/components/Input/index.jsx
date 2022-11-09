import React from "react";
import './styles.css'

const Input = (props) => {
    return (
    <div>
        <label htmlFor={props.label}>{props.label}</label>
        <input id={props.label} type={props.type} name={props.label} required></input>
    </div>
    )
} 

export default Input;