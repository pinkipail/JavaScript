import React, { Fragment } from 'react';
import './Product.css'
import BtnBlock from '../../components/BtnBlock/BtnBlock'
import BtnIcon from '../../components/BtnIcon/BtnIcon';

export default function({list}){
    return(
        <Fragment>
                <div className='products'>
                    <div className="product-name">{list.label}</div>
                    <div className="product-count">{list.count}</div>
                    <div className="product-price">{list.price}</div>
                </div>


                <BtnBlock>
                    <BtnIcon class={'btn-edit'}/>
                    <BtnIcon class={'btn-remove'} onClick={()=>alert('fsdf')}/>
                </BtnBlock>
        </Fragment>
    )
}