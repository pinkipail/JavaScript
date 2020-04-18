import React,{Fragment} from 'react';
import './CreateProduct.css'
import BtnBlock from '../../components/BtnBlock/BtnBlock'
import BtnIcon from '../../components/BtnIcon/BtnIcon';
import Input from '../../components/Input/Input';

export default function(props){
    return (
        <Fragment>
            <form>
                <Input placeholder='название' className='product-name'/>
                <Input placeholder='кол-во' className='product-count'/>
                <Input placeholder='цена' className='product-price'/>
            </form>

            <BtnBlock>
                <BtnIcon class={'btn-add'}/>
                <BtnIcon class={'btn-remove'} onClick={()=>alert('fsdf')}/>
            </BtnBlock>
        </Fragment>
    )
}