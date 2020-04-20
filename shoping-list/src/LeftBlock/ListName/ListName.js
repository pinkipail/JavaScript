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

    const title = useSelector((state)=>state.shopingLists[activeList].title)

    const [state, setState] = useState({listName: title, changeFlag:false})
    const [changeFlag, setChangeFlag] = useState(false)

    const btnEdit = changeFlag ? 'btn-confirm' : 'btn-edit'
    const listName = changeFlag 
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
        console.log('h', state.listName);
        
  /*       dispatch(changeListName(index, e.target.value))    */   
    }

    const dispatch = useDispatch()
    function confirmChange(){
        dispatch(changeListName(index, state.listName))
        
    }

    function displayChangeListName(){
        if(changeFlag){
            confirmChange()
            disableChangeListName()
        }
        else {
            enableChangeListName()
        }
                        
    }


    function enableChangeListName(){
        setChangeFlag(true)        

        function handlerDocumentClick(e){
            disableChangeListName()
            document.removeEventListener('click', handlerDocumentClick)   
 
        }


        document.addEventListener('click', handlerDocumentClick)
  

    }

    function disableChangeListName(){
        setChangeFlag(false)        
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
                        displayChangeListName()
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