import React, { useEffect } from 'react'
import './RightBlock.css'
import Title from '../components/Title/Title';
import CollectionOfItems from '../components/CollectionOfItems/CollectionOfItems'
import Product from './Product/Product'
import CreateProduct from './CreateProduct/CreateProduct'
import SelectedProduct from './SelectedProduct/SelectedProduct'
import { useSelector } from 'react-redux';
import Amount from './Amount/Amount';

export default function(){
    
    const collectionProducts= useSelector((state)=>state.shopingLists[useSelector((state)=>state.activeList)]).products
    const collectionSelectedProducts = useSelector((state)=>state.shopingLists[useSelector((state)=>state.activeList)]).selectedProducts

    return(
        <div className="right-block">
            <Title>редактировать</Title>
            <CollectionOfItems components={Product} collection={collectionProducts}/>
            <CreateProduct/>
            <CollectionOfItems components={SelectedProduct} collection={collectionSelectedProducts}/>
            <Amount/>
        </div>
    )
}