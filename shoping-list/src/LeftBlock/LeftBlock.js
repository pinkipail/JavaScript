import React from 'react';
import './LeftBlock.css'
import Title from '../components/Title/Title';
import CollectionOfItems from '../components/CollectionOfItems/CollectionOfItems';
import ListName from './ListName/ListName'
import ButtonCreateList from './ButtonCreatList/ButtonCreateList'


export default function(){
    let arrayLists = ['к чаю', 'самое необхимое', 'на салат']
    return(
        <div className="left-block">
            <Title>
                список покупок
            </Title>
            <CollectionOfItems components={ListName} lists={arrayLists}/>
            <ButtonCreateList/>
        </div>
    )
}