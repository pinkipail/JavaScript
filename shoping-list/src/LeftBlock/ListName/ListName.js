import React from 'react';
import './ListName.css'
import BtnBlock from '../../components/BtnBlock/BtnBlock'
import BtnIcon from '../../components/BtnIcon/BtnIcon';
import { useDispatch, useSelector } from 'react-redux';
import { removeListName, selectListName } from '../../redux/actions';
import Item from '../../components/Item/Item';

export default function({item, index}){
    const dispatch = useDispatch()
    const activeList = useSelector((state)=>state.activeList)
    let active = (activeList === index ? 'active' : null)

    return( 
        <Item 
            active={active}
            handlerClick={()=>{dispatch(selectListName(index))}}
            >
            <div>
                - {item.title}  <span className="left-block-item__count">(0/{item.products.length})</span>
            </div>
            <BtnBlock>
                <BtnIcon class={'btn-edit'}/>
                <BtnIcon 
                    class={'btn-remove'} 
                    handlerClick={(event)=>{
                        event.stopPropagation();
                        dispatch(removeListName(index))}}/>
            </BtnBlock>
        </Item>

    )
}