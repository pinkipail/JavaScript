import React from 'react';
import './Product.css'
import BtnBlock from '../../components/BtnBlock/BtnBlock'
import BtnIcon from '../../components/BtnIcon/BtnIcon';
import Item from '../../components/Item/Item';
import { useDispatch } from 'react-redux';
import { removeProduct } from '../../redux/actions/actionsProduct';

export default function({item, index}){

    const dispatch = useDispatch()

    return(
        <Item>
                <div className='products'>
                    <div className="product-name">{item.label}</div>
                    <div className="product-count">{item.count}</div>
                    <div className="product-price">{item.price}</div>
                </div>


                <BtnBlock>
                    <BtnIcon class={'btn-edit'}/>
                    <BtnIcon 
                    class='btn-remove'
                    handlerClick={(event)=>{
                        event.stopPropagation()
                        dispatch(removeProduct(index))}
                    }
                />
                </BtnBlock>
        </Item>
    )
}