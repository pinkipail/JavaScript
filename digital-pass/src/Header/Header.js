import React from 'react'
import './Header.css'
import {NavLink} from 'react-router-dom';


export default function() {
    return (
        <header className='header'>
        <div className='header__logo'>ЦИФРОВОЙ ПРОПУСК</div>
        <div className='header-nav'>
            <NavLink to="/temporary">Временный пропуск</NavLink>
            <NavLink to="/permanent">Постоянный пропуск</NavLink>
            <NavLink to="/org-request">Заявка от организации</NavLink>
        </div>
        <div className='header-menu-img'>
            <div className="header-menu-img__line"></div>
            <div className="header-menu-img__line"></div>
            <div className="header-menu-img__line"></div>
        </div>
        </header>
    )
  }
  
