import React, { Fragment } from 'react';
import './CollectionOfItems.css'
import Item from '../Item/Item';
import Empty from '../Empty/Empty';
import SelectedProduct from '../../RightBlock/SelectedProduct/SelectedProduct';


export default function(props){
    if (props.components === SelectedProduct && props.collection.length === 0)
    return (
        <Fragment/>
    )
    else
        if (!props.collection || props.collection.length === 0)
            return (
                <Item>
                    <Empty>
                        пусто
                    </Empty>
                </Item>
            )



    
    return (
        props.collection.map((item,index)=>{
            return ( 
                <props.components item={item} index={index} key={index}/>
            )
        })
    )   
}