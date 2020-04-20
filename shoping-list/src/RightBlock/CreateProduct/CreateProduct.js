import React,{ useState} from 'react';
import './CreateProduct.css'
import BtnBlock from '../../components/BtnBlock/BtnBlock'
import BtnIcon from '../../components/BtnIcon/BtnIcon';
import Input from '../../components/Input/Input';
import { useDispatch } from 'react-redux';
import { addProduct } from '../../redux/actions/actionsProduct';
import Item from '../../components/Item/Item';

export default function(props){    

    const initInpputState = {label: '', count: '', price: ''}
    const [inputState, setInputChange] = useState(initInpputState)

    function handlerChangeInput(event, property){
        setInputChange({...inputState, [property]: event.target.value})
    }

    const dispatch = useDispatch()


    function createProduct(){        
        if (inputState.label && inputState.count && inputState.price){
            dispatch(addProduct(inputState))
            clearInput()
        }

    }

    function clearInput(){
        setInputChange(initInpputState)
    }

    return (
        <Item className='create-product'>
            <form >
                <Input 
                    value={inputState.label}
                    handlerChange={(e)=>{handlerChangeInput(e,'label')}}
                    maxlength='12'
                    placeholder='название' className='product-label'/>
                <Input 
                    value={inputState.count}
                    handlerChange={(e)=>{handlerChangeInput(e,'count')}}
                    maxlength='5'
                    placeholder='кол-во' className='product-count'/>
                <Input 
                    value={inputState.price}
                    handlerChange={(e)=>{handlerChangeInput(e,'price')}}
                    maxlength='7'
                    placeholder='цена' className='product-price'/>
            </form>

            <BtnBlock>
                <BtnIcon 
                    class={'btn-add'}
                    handlerClick={createProduct}/>
                <BtnIcon class={'btn-remove'} handlerClick={clearInput}/>
            </BtnBlock>
        </Item>
    )
}