import React  from 'react'
import './SelectedProduct.css'
import Item from '../../components/Item/Item'
import BtnBlock from '../../components/BtnBlock/BtnBlock'
import BtnIcon from '../../components/BtnIcon/BtnIcon'

export default function({item}){
    return(
        <Item>
                <div className='products selected'>
                    <div className="product-label">{item.label}</div>
                    <div className="product-count">{item.count}</div>
                    <div className="product-price">{item.price}р</div>
                </div>
        </Item>
    )
}