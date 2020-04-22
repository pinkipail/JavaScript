import React from 'react';
import { useSelector } from 'react-redux';
import './LeftBlock.css'
import Title from '../components/Title/Title';
import CollectionOfItems from '../components/CollectionOfItems/CollectionOfItems';
import ListName from './ListName/ListName'
import ButtonCreateListName from './ButtonCreateListName/ButtonCreateListName'
import BlockScroll from '../components/BlockScroll/BlockScroll'

export default function(){    

    const collection = useSelector((state) => state.shopingLists)
    const displayListName = useSelector((state) => state.displayListName)

    if(displayListName) 
    return(
        <div className="left-block animated fadeInLeft">
            <Title>
                список покупок
            </Title>
            <BlockScroll>
                <CollectionOfItems components={ListName} collection={collection}/>
                <ButtonCreateListName/>
            </BlockScroll>
            <div className='version'>v0.1</div>
        </div>
    )
    
    return(
        <div className="left-block animated fadeOutLeft">
            <Title>
                список покупок
            </Title>
            <BlockScroll>
                <CollectionOfItems components={ListName} collection={collection}/>
                <ButtonCreateListName/>
            </BlockScroll>
            <div className='version'></div>
        </div>
    )
}