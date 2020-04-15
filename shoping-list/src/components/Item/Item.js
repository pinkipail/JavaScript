import React from 'react';
import './Item.css'


export default function({children}){
    return (
        <div className='block-item'>
            {children}
        </div>
    )  
}