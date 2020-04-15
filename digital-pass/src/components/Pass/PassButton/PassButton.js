import React from 'react'
import './PassButton.css'

export default function({children}) {
    return (
        <button className='btn-submit'>
            {children}
        </button>
    )
}