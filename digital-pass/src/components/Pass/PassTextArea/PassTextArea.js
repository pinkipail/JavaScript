import React from 'react'
import './PassTextArea.css'

export default function(props) {
    return(
        <textarea className='text-area' name={props.name} placeholder={props.placeholder}/>
    )
}
