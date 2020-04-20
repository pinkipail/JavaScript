import React, { useEffect } from 'react';
import './Amount.css'
import { useSelector, useDispatch } from 'react-redux'
import { calculatingPresentAmount, calculatingAmount } from '../../redux/actions/actionsProduct';

export default function() {
    let collectionProducts = useSelector((state)=> state.shopingLists[state.activeList].products)
    const dispatch = useDispatch()

    useEffect(()=>{
        dispatch(calculatingPresentAmount())
        dispatch(calculatingAmount())
    }, [collectionProducts]) 
   



    return(
        <div className='wrapper-amount'>
            <div className='present-amount'>
                Куплено на сумму: {useSelector((state)=>state.presentAmount)}р
            </div>
            <div className='total-amount'>
                Всего: {useSelector((state)=>state.totalAmount)}р    
            </div>
        </div>
    )
}
