import React, { useEffect } from 'react'
import './RightBlock.css'
import Title from '../components/Title/Title';
import CollectionOfItems from '../components/CollectionOfItems/CollectionOfItems'
import Product from './Product/Product'
import CreateProduct from './CreateProduct/CreateProduct'
import SelectedProduct from './SelectedProduct/SelectedProduct'
import { useSelector, useDispatch } from 'react-redux';
import Amount from './Amount/Amount';
import { calculatingAmount } from '../redux/actions/actionsProduct'

export default function(){
    const collectionProducts = useSelector((state)=>state.shopingLists[useSelector((state)=>state.activeList)])
    let collection
    try{
        collection = collectionProducts.products
    }
    catch{
        collection = []
    }

    const dispatch = useDispatch()

    useEffect(()=>{
        dispatch(calculatingAmount())
        
    },[collection])

    return(
        <div className="right-block">
            <Title>редактировать</Title>
            <CollectionOfItems components={Product} collection={collection}/>
            <CreateProduct/>
            <CollectionOfItems components={SelectedProduct} collection={collection}/>
            <Amount/>
        </div>
    )
}