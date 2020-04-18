import React from 'react';
import './Product.css'
import BtnBlock from '../../components/BtnBlock/BtnBlock'
import BtnIcon from '../../components/BtnIcon/BtnIcon';
import Item from '../../components/Item/Item';

export default function({item, index}){

    return(
        <Item>
                <div className='products'>
                    <div className="product-name">{item.label}</div>
                    <div className="product-count">{item.count}</div>
                    <div className="product-price">{item.price}</div>
                </div>


                <BtnBlock>
                    <BtnIcon class={'btn-edit'}/>
                    <BtnIcon class={'btn-remove'}/>
                </BtnBlock>
        </Item>
    )
}