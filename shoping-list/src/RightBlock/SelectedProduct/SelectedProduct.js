import React  from 'react'
import './SelectedProduct.css'
import Item from '../../components/Item/Item'
import { useDispatch } from 'react-redux'
import { uncheckedProduct } from '../../redux/actions/actionsProduct'

export default function({item, index}){
    const dispatch= useDispatch()
    return(
        <Item handlerClick={()=>{dispatch(uncheckedProduct(index))}}>
                <div className='products selected'>
                    <div className="product-label">{item.label}</div>
                    <div className="product-count">{item.count}</div>
                    <div className="product-price">{item.price}р</div>
                </div>
        </Item>
    )
}