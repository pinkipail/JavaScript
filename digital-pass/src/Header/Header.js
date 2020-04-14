import React from 'react'
import './Header.css'


export default function() {
    return (
        <header className='header'>
        <div className='header__logo'>ЦИФРОВОЙ ПРОПУСК</div>
        <div className='header-nav'>
            <a href="/index.html">Временный пропуск</a>
            <a href="/permanent.html">Постоянный пропуск</a>
            <a href="/org-request.html">Заявка от организации</a>
        </div>
        <div className='header-menu-img'>
            <div className="header-menu-img__line"></div>
            <div className="header-menu-img__line"></div>
            <div className="header-menu-img__line"></div>
        </div>
        </header>
    )
  }
  
