import React, { useState, Fragment } from 'react';
import './Product.css'
import BtnBlock from '../../components/BtnBlock/BtnBlock'
import BtnIcon from '../../components/BtnIcon/BtnIcon';
import Item from '../../components/Item/Item';
import { useDispatch } from 'react-redux';
import { removeProduct, checkedProduct, changeProduct } from '../../redux/actions/actionsProduct';
import Input from '../../components/Input/Input';

export default function({item, index}){

    const [state, setState] = useState({products: item, changeFlag: false})    

    const handlerClickProduct = (!state.changeFlag) 
        ? ()=>{dispatch(checkedProduct(index))}
        : null

    const btnEdit = state.changeFlag ? 'btn-confirm' : 'btn-edit'
    const products = (state.changeFlag 
        ?<form >
            <Input 
                value={state.products.label}
                handlerChange={(e)=>{handlerChangeInput(e,'label')}}
                maxlength='12'
                placeholder='название'
                className='product-label'
                autoFocus = 'autoFocus'/>
                
            <Input 
                value={state.products.count}
                handlerChange={(e)=>{handlerChangeInput(e,'count')}}
                maxlength='5'
                placeholder='кол-во' 
                className='product-count'/>
            <Input 
                value={state.products.price}
                handlerChange={(e)=>{handlerChangeInput(e,'price')}}
                maxlength='5'
                placeholder='цена' 
                className='product-price'/>
        </form>
        :  <Fragment>
                <div className="product-label">{item.label}</div>
                <div className="product-count">{item.count}</div>
                <div className="product-price">{item.price}р</div>
            </Fragment>
        )
 

    const dispatch = useDispatch()   
    function handlerChangeInput(event, property){
        setState({...state, products: {...state.products, [property]: event.target.value}})
    }

    function confirmChange(){
        dispatch(changeProduct(index, state.products))        
    }
    
    function displayChangeProduct(event){
        if(state.changeFlag){
            confirmChange()
            disableChangeProduct() 
        }
        else
            enableChangeProduct(event)          
    }

    function enableChangeProduct(event){
        setState({...state, changeFlag: true})
        const target = event.target
        function handlerDocumentClick(e){
            if(e.target === target)
                document.removeEventListener('click', handlerDocumentClick, true)   
            if(e.target.parentNode.parentNode.parentNode !== target.parentNode.parentNode &&
                e.target !== target.parentNode.parentNode &&
                e.target !== target){
                e.stopPropagation()
                disableChangeProduct()
                document.removeEventListener('click', handlerDocumentClick, true)   
            }
        }
        document.addEventListener('click', handlerDocumentClick, true)
    }

    function disableChangeProduct(){
        setState({...state, changeFlag: false})
    }

    return(
        <Item handlerClick={handlerClickProduct}>
            <div className='products'>
                {products}
            </div>
            

            <BtnBlock>
                <BtnIcon class={btnEdit}
                    handlerClick={(event)=>{
                        event.stopPropagation()
                        displayChangeProduct(event)
                    }}
                />
                <BtnIcon 
                    class='btn-remove'
                    handlerClick={(event)=>{
                        event.stopPropagation()
                        dispatch(removeProduct(index))}
                    }
                />
            </BtnBlock>
        </Item>
    )
}