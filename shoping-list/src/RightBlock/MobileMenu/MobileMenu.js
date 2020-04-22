import React from 'react';
import './MobileMenu.css'
import { toggleDisplayListName } from '../../redux/actions/actionsListName';
import { useDispatch } from 'react-redux';

export default function(props){

    const dispatch = useDispatch()
    return(
        <div className='mobile-menu' onClick={()=>{dispatch(toggleDisplayListName())}}>
            <div className='mobile-menu__line'></div>
            <div className='mobile-menu__line'></div>
            <div className='mobile-menu__line'></div>
        </div>
    )
}