import React from 'react'
import './Pass.css'

export default function(props) {
    return (
        <div className='pass'>
            <form>
                {props.children}
            </form>
        </div>
    )
}