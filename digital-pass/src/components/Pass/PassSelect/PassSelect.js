import React from 'react'
import './PassSelect.css'

export default function(props) {
    return (
        <select className="pass-select" required="required" name={props.name}>
            {props.children}
    </select>
    )
}