import React from 'react';
import './Input.css'


export default function({placeholder, className}){
    return (
        <input placeholder={placeholder} type='text' className={`input ${className}`}   autocomplete="off"/> 
    )
}