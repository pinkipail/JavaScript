import React from 'react'
import './PassInput.css'
import flatpickr from 'flatpickr';



export default function(props) {

    flatpickr("#date", {
        enableTime: true,
        dateFormat: "d.m.Y H:i",
        time_24hr: true,
        defaultDate: new Date()
    })

    switch (props.type) {
        case 'text':
            return (
                <input
                    name={props.name}
                    placeholder={props.placeholder}
                    id={props.id}
                    type='text'
                    className='pass-input'
                    required='required'
                />
            )
        case 'tel':
            return (
                <input
                    name={props.name}
                    placeholder={props.placeholder}
                    id={props.id}
                    type='tel'
                    className='pass-input'
                    required='required'
                    maxLength='11'
                />
            )
            case 'date':
                return (
                    <input
                        ref={props.inputRef}
                        name={props.name}
                        placeholder={props.placeholder}
                        type='date'
                        className='pass-input'
                        required='required'
                    />
                )

        default:
            return (
                <input
                    name={props.name}
                    placeholder={props.placeholder}
                    id={props.id}
                />
            )
    }
}