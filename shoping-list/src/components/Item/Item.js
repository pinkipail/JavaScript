import React from 'react';
import './Item.css'


export default function({children, handlerClick, active}){
    return (
        <div 
            className={`block-item ${active}`}
            onClick={handlerClick}>
            {children}
        </div>
    )  
}