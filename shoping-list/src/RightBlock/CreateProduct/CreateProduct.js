import React,{ useState} from 'react';
import './CreateProduct.css'
import BtnBlock from '../../components/BtnBlock/BtnBlock'
import BtnIcon from '../../components/BtnIcon/BtnIcon';
import Input from '../../components/Input/Input';
import { useDispatch } from 'react-redux';
import { addProduct } from '../../redux/actions/actionsProduct';
import Item from '../../components/Item/Item';

export default function(props){    

    const initInputState = {label: '', count: '', price: ''}
    const [inputState, setInputState] = useState(initInputState)

    function handlerChangeInput(event, property){
        if(event.target.value.length <= event.target.maxLength){
            setInputState({...inputState, [property]: event.target.value})
        }
    }

    const dispatch = useDispatch()

    function createProduct(){        
        if (inputState.label && inputState.count && inputState.price){
            dispatch(addProduct(inputState))
            clearInput()
        }
    }

    function clearInput(){
        setInputState(initInputState)
    }

    return (
        <Item className='create-product'>
            <form >
                <Input 
                    value={inputState.label}
                    handlerChange={(e)=>{handlerChangeInput(e,'label')}}
                    maxlength='12'
                    placeholder='название'
                    className='product-label'/>
                <Input 
                    value={inputState.count}
                    handlerChange={(e)=>{handlerChangeInput(e,'count')}}
                    type='number'
                    maxlength='2'
                    placeholder='кол-во'
                    className='product-count'/>
                <Input 
                    value={inputState.price}
                    handlerChange={(e)=>{handlerChangeInput(e,'price')}}
                    type='number'
                    maxlength='5'
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