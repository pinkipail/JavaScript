import React, { Fragment } from 'react';
import './ListName.css'
import BtnBlock from '../../components/BtnBlock/BtnBlock'
import BtnIcon from '../../components/BtnIcon/BtnIcon';


export default function({list}){
    return( 
        <Fragment>
            <div>
                - {list}  <span className="left-block-item__count">(1/5)</span>
            </div>
                    
            <BtnBlock>
                <BtnIcon class={'btn-edit'}/>
                <BtnIcon class={'btn-remove'} onClick={()=>alert('fsdf')}/>
            </BtnBlock>
        </Fragment>

)
    
}