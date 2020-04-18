import React from 'react'
import './RightBlock.css'
import Title from '../components/Title/Title';
import CollectionOfItems from '../components/CollectionOfItems/CollectionOfItems'
import Product from './Product/Product'
import CreateProduct from './CreateProduct/CreateProduct'
import Item from '../components/Item/Item';
import { useSelector, useDispatch } from 'react-redux';
import { selectListName } from '../redux/actions';

export default function(){

    const dispatch = useDispatch()
    const shopingLists = useSelector((state)=>state.shopingLists)
    let index = useSelector((state)=>state.activeList)
    let collectionProducts

    if (shopingLists && shopingLists.length !== 0){
        if(index >= shopingLists.length){
            dispatch(selectListName(shopingLists.length-1))
            index = shopingLists.length - 1
        }
        collectionProducts = shopingLists[index].products
    }
    else
        collectionProducts = []

    return(
        <div className="right-block">
            <Title>редактировать</Title>
            <CollectionOfItems components={Product} collection={collectionProducts}/>
            <Item>
                <CreateProduct/>
            </Item>
        </div>
    )
}