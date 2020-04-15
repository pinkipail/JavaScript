import React from 'react'
import './RightBlock.css'
import Title from '../components/Title/Title';
import CollectionOfItems from '../components/CollectionOfItems/CollectionOfItems'
import Product from './Product/Product'
import CreateProduct from './CreateProduct/CreateProduct'

export default function(){
    let arrayLists = [
        {
            label: 'Печенье',
            count: '1уп',
            price: '75р'
        },
        {
            label: 'Торт',
            count: '1шт',
            price: '345р'
        },
        {
            label: 'Чай',
            count: '2уп',
            price: '40р'
        }
    ]
    let CreateList = [
        {
            label: 'название',
            count: 'кол-во',
            price: 'цена'
        }
    ]

    return(
        <div className="right-block">
            <Title>редактировать</Title>
            <CollectionOfItems components={Product} lists={arrayLists}/>
            <CollectionOfItems components={CreateProduct} lists={CreateList}/>
        </div>
    )
}