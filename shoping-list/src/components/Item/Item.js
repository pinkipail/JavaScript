import React from 'react';
import './Item.css'


export default function({children, handlerClick, active, className}){
    return (
        <div 
            className={`block-item ${active} ${className}`}
            onClick={handlerClick}>
            {children}
        </div>
    )  
}