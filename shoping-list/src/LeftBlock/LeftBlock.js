import React from 'react';
import { useSelector } from 'react-redux';
import './LeftBlock.css'
import Title from '../components/Title/Title';
import CollectionOfItems from '../components/CollectionOfItems/CollectionOfItems';
import ListName from './ListName/ListName'
import ButtonCreateListName from './ButtonCreateListName/ButtonCreateListName'
import CreateListName from './CreateListName/CreateListName'
import BlockScroll from '../components/BlockScroll/BlockScroll'

export default function(){    

    const collection = useSelector((state) => state.shopingLists)
    
    return(
        <div className="left-block">
            <Title>
                список покупок
            </Title>
            <BlockScroll>
                <CollectionOfItems components={ListName} collection={collection}/>
                <ButtonCreateListName/>
            </BlockScroll>
            <CreateListName/>
        </div>
    )
}