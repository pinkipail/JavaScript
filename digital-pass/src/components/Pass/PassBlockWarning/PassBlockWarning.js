import React from 'react'
import './PassBlockWarning.css'

export default function({children}) {
    return(
        <div className='pass__text-warning'>
            {children}
        </div>
    )
}