import React from 'react';
import './CollectionOfItems.css'
import Item from '../Item/Item';


export default function(props){
    return (
        props.lists.map((list,index)=>{
            return ( 
                <Item key={index}>
                    <props.components list={list} index={index}/>
                </Item>
            )
        })
    )   
}