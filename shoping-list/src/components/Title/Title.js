import React from 'react';
import './Title.css'

export default function(props){
    return(
        <div className="title">
            {props.children}
        </div>
    )
}