import React from 'react'
import './BtnBlock.css'

export default function(props){

    return (
        <div className='btn-block'>
            {props.children}
        </div>
    )
}