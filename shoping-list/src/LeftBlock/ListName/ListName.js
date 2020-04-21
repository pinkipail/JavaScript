import React, { useState } from 'react';
import './ListName.css'
import BtnBlock from '../../components/BtnBlock/BtnBlock'
import BtnIcon from '../../components/BtnIcon/BtnIcon';
import { useDispatch, useSelector } from 'react-redux';
import { removeListName,
         selectListName,
         changeListName } from '../../redux/actions/actionsListName';
import Item from '../../components/Item/Item';
import Input from '../../components/Input/Input';

export default function({item, index}){
    
    const activeList = useSelector((state)=>state.activeList)
    let active = (activeList === index ? 'active' : null)
    const [state, setState] = useState({listName: item.title, changeFlag:false})

    const btnEdit = state.changeFlag ? 'btn-confirm' : 'btn-edit'
    const listName = state.changeFlag 
        ? <Input 
            placeholder='название' 
            value={state.listName} 
            className='list-name-input' 
            autoFocus  
            maxlenght='14'
            handlerChange={handlerChange}
        />
        : <span> {item.title}</span>

    function handlerChange(e){        
        setState({...state, listName: e.target.value})
    }

    const dispatch = useDispatch()
    function confirmChange(){
        dispatch(changeListName(index, state.listName))
    }

    function displayChangeListName(event){
        if(state.changeFlag){
            confirmChange()
            disableChangeListName()
        }
        else {
            enableChangeListName(event)
        }
    }


    function enableChangeListName(event){
        setState({...state, changeFlag: true})
        
        const target = event.target
        function handlerDocumentClick(e){
            if(e.target === target)
                document.removeEventListener('click', handlerDocumentClick, true)

            if(e.target.parentNode.parentNode !== target.parentNode.parentNode &&
                e.target !== target.parentNode.parentNode &&
                e.target !== target){
                e.stopPropagation()
                disableChangeListName()
                document.removeEventListener('click', handlerDocumentClick, true)   
            }
        }
        document.addEventListener('click', handlerDocumentClick, true)
    }

    function disableChangeListName(){
        setState({...state, changeFlag: false})        
    }

    const countCheckedProducts = useSelector((state)=>state.shopingLists[index].selectedProducts.length)
    const countAllProducts = useSelector((state)=>state.shopingLists[index].products.length) + countCheckedProducts
    return( 
        <Item 
            active={active}
            handlerClick={()=>{
                dispatch(selectListName(index))
            }}
            >
            <div>
                -{listName}  <span className="left-block-item__count">({countCheckedProducts}/{countAllProducts})</span>
            </div>


            <BtnBlock>
                <BtnIcon 
                    class={btnEdit}
                    handlerClick={(event)=>{
                        event.stopPropagation()
                        displayChangeListName(event)
                    }}
                />
                <BtnIcon 
                    class='btn-remove'
                    handlerClick={(event)=>{
                        event.stopPropagation()
                        dispatch(removeListName(index))}
                    }
                />
            </BtnBlock>
        </Item>

    )
}