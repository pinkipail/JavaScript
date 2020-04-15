import React from 'react'
import './PassButton.css'

export default function(props) {
    return (
        <button className='btn-submit'>
            {props.children}
        </button>
    )
}