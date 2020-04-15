import React,{Fragment} from 'react';
import './CreateProduct.css'
import BtnBlock from '../../components/BtnBlock/BtnBlock'
import BtnIcon from '../../components/BtnIcon/BtnIcon';

export default function(props){
    return (
        <Fragment>
            <form action="create-item">
                <input type="text" className="create-item" name="name" placeholder='название' id=""/>
                <input type="text" className="create-item" name="count" placeholder='кол-во' id=""/>
                <input type="text" className="create-item" name="price" placeholder='цена' id=""/>
            </form>

            <BtnBlock>
                <BtnIcon class={'btn-add'}/>
                <BtnIcon class={'btn-remove'} onClick={()=>alert('fsdf')}/>
            </BtnBlock>
        </Fragment>
    )
}