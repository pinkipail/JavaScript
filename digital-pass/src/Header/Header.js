import React from 'react'
import './Header.css'
import {NavLink} from 'react-router-dom';


export default function() {

    function toggleMenu(event){

        let btnMenu = event.target,
            btnMenuLine = btnMenu.childNodes,
            navMenu = document.querySelector('.header-nav')

        if(document.documentElement.clientWidth <= 992){
            navMenu.classList.toggle('display-flex')
            btnMenuLine.forEach((line)=>{
                line.classList.toggle('bg-grey')    
            })
        }

        document.addEventListener('click', function(event){
            if (event.target !== btnMenu && document.documentElement.clientWidth <= 992) {
                navMenu.classList.remove('display-flex')
                btnMenuLine.forEach((line)=>{
                    line.classList.remove('bg-grey')
                })
            }
        })
    }

    return (
        <header className='header'>
            <div className='header__logo'>ЦИФРОВОЙ ПРОПУСК</div>
            <div className='header-nav'>
                <NavLink to="/temporary">Временный пропуск</NavLink>
                <NavLink to="/permanent">Постоянный пропуск</NavLink>
                <NavLink to="/org-request">Заявка от организации</NavLink>
            </div>
            <div className='header-menu-img' onClick={toggleMenu}>
                <div className="header-menu-img__line"></div>
                <div className="header-menu-img__line"></div>
                <div className="header-menu-img__line"></div>
            </div>
        </header>
    )
  }
  
