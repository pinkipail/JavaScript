import React from 'react';
import './Product.css'
import BtnBlock from '../../components/BtnBlock/BtnBlock'
import BtnIcon from '../../components/BtnIcon/BtnIcon';
import Item from '../../components/Item/Item';
import { useDispatch } from 'react-redux';
import { removeProduct, checkedProduct } from '../../redux/actions/actionsProduct';

export default function({item, index}){

    const dispatch = useDispatch()   



    return(
        <Item handlerClick={()=>{dispatch(checkedProduct(index))}}>
                <div className='products' >
                    <div className="product-label">{item.label}</div>
                    <div className="product-count">{item.count}</div>
                    <div className="product-price">{item.price}р</div>
                </div>


                <BtnBlock>
                    <BtnIcon class={'btn-edit'}
                        handlerClick={(event)=>{
                            event.stopPropagation()
                            
                        }}
                    />
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