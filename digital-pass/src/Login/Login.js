import React from 'react'
import './Login.css'


export default function() {
    return (
        <div className='login'>
            <form className='login-form'>
                <div className='login-form__title'>
                    Войдите для просмотра или запроса пропуска
                </div>
                <input placeholder='Номер телефона' type='tel'>

                </input>
                <div className='login-form__info'>
                    На указанный номер будет отправлено sms-сообщение с кодом подтверждения.
                </div>
                <button className='login-form__submit'>
                    ВЫСЛАТЬ КОД
                </button>
            </form>
        </div>
    )
  }
  
