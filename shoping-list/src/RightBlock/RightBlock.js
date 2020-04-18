import React from 'react'
import './RightBlock.css'
import Title from '../components/Title/Title';
import CollectionOfItems from '../components/CollectionOfItems/CollectionOfItems'
import Product from './Product/Product'
import CreateProduct from './CreateProduct/CreateProduct'
import Item from '../components/Item/Item';
import { useSelector } from 'react-redux';

export default function(){
    const collectionProducts = useSelector((state)=>state.shopingLists[useSelector((state)=>state.activeList)])
    let collection
    try{
        collection = collectionProducts.products
    }
    catch{
        collection = []
    }

    return(
        <div className="right-block">
            <Title>редактировать</Title>
            <CollectionOfItems components={Product} collection={collection}/>
            <Item>
                <CreateProduct/>
            </Item>
        </div>
    )
}