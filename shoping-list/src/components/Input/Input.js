import React from 'react';
import './Input.css'


export default function(props){
    return (
        <input 
            onChange={props.handlerChange}
            placeholder={props.placeholder}
            value={props.value}  
            className={`input ${props.className}`}
            maxlenght={props.maxlenght}
            type='text'
            autoComplete="off"
            autoFocus={props.autoFocus}
        /> 
    )
}