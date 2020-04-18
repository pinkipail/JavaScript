import React from 'react';
import "./ButtonCreateListName.css";
import { showCreateListName } from '../../redux/actions';
import { connect } from 'react-redux';

const ButtonCreateListName = ({showWindow})=>{
    return (        
        <div className="left-block-item__create" onClick={showWindow}>
            создать список
        </div>
        )
}

const mapDispatchToProps = {
    showWindow : showCreateListName
}

export default connect(null, mapDispatchToProps)(ButtonCreateListName)