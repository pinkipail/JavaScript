import React from 'react'
import './BtnIcon.css'

export default function(props){
    return (
        <button className={`btn-icon ${props.class}`} onClick={props.onClick}></button>
    )
}