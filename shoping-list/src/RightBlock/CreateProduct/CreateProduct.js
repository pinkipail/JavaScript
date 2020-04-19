import React,{Fragment, useState} from 'react';
import './CreateProduct.css'
import BtnBlock from '../../components/BtnBlock/BtnBlock'
import BtnIcon from '../../components/BtnIcon/BtnIcon';
import Input from '../../components/Input/Input';
import { useDispatch } from 'react-redux';
import { addProduct } from '../../redux/actions/actionsProduct';

export default function(props){    

    const initInpputState = {label: '', count: '', price: ''}
    const [inputState, setInputChange] = useState(initInpputState)

    function handlerChangeInput(event, property){
        setInputChange({...inputState, [property]: event.target.value})
    }

    const dispatch = useDispatch()

    function createProduct(){
        console.log(inputState)
        console.log(initInpputState)
        
        if (inputState.label && inputState.count && inputState.price){
            dispatch(addProduct(inputState))
            clearInput()
        }

    }

    function clearInput(){
        setInputChange(initInpputState)
    }

    return (
        <Fragment>
            <form>
                <Input 
                    value={inputState.label}
                    handlerChange={(e)=>{handlerChangeInput(e,'label')}}
                    placeholder='название' className='product-label'/>
                <Input 
                    value={inputState.count}
                    handlerChange={(e)=>{handlerChangeInput(e,'count')}}
                    placeholder='кол-во' className='product-count'/>
                <Input 
                    value={inputState.price}
                    handlerChange={(e)=>{handlerChangeInput(e,'price')}}
                    placeholder='цена' className='product-price'/>
            </form>

            <BtnBlock>
                <BtnIcon 
                    class={'btn-add'}
                    handlerClick={createProduct}/>
                <BtnIcon class={'btn-remove'} handlerClick={clearInput}/>
            </BtnBlock>
        </Fragment>
    )
}