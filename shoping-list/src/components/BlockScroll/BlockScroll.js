import React from 'react'
import './BlockScroll.css'

export default function(props){

    return (
        <div className='block-scroll'>
            {props.children}
            <div className='block-scroll-last'></div>
        </div>
    )
}