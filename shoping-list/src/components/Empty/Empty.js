import React from 'react';
import './Empty.css'


export default function({children}){
    return (
        <div className='empty'>
            {children}
        </div>
    )  
}