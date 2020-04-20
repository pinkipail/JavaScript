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
    const dispatch = useDispatch()
    const activeList = useSelector((state)=>state.activeList)
    const countProducts = useSelector((state)=>state.shopingLists[index].products.length)
    let active = (activeList === index ? 'active' : null)

    const [changeFlag, setChangeFlag] = useState(false)

    const btnEdit = changeFlag ? 'btn-confirm' : 'btn-edit'
    const listName = changeFlag 
        ? <Input 
            placeholder='название' 
            value={item.title} 
            className='list-name-input' 
            autoFocus  
            maxlenght='14'
            handlerChange={handlerChange}
        />
        : <span> {item.title}</span>

    function handlerChange(e){
        dispatch(changeListName(index, e.target.value))
    }

    function displayChangeListName(){
          
        if(changeFlag)
            disableChangeListName()
        else 
            enableChangeListName()
    }

    function enableChangeListName(){
        setChangeFlag(true)

        function handlerDocumentClick(e){
            disableChangeListName()
            document.removeEventListener('click', handlerDocumentClick)              
        }

        function handlerDocumentPressEnter(e){
            if (e.keyCode === 13) {
                disableChangeListName() 
                document.removeEventListener('keydown', handlerDocumentPressEnter)     
            }        
        }

        document.addEventListener('click', handlerDocumentClick)
        document.addEventListener('keydown',handlerDocumentPressEnter)

    }

    function disableChangeListName(){
        setChangeFlag(false)
    }

    return( 
        <Item 
            active={active}
            handlerClick={()=>{
                dispatch(selectListName(index))
            }}
            >
            <div>
                -{listName}  <span className="left-block-item__count">(0/{countProducts})</span>
            </div>


            <BtnBlock>
                <BtnIcon 
                    class={btnEdit}
                    handlerClick={(event)=>{
                        event.stopPropagation()
                        displayChangeListName()
                    }
                    }
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