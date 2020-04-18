import React, { Fragment } from 'react';
import "./CreateListName.css";
import { connect } from 'react-redux';
import {createListName, hideCreateListName} from '../../redux/actions';

class CreateListName extends React.Component{
    constructor(props){
        super(props)

        this.state = {
            value: ''
        }
    }

    createName = ()=>{
        if(!this.state.value.trim()){
            return
        }
        this.props.createListName(this.state.value)        
        this.setState({value: ''})
        this.props.hideWindow()
    }

    onChangeName = (event)=>{
        this.setState({value: event.target.value})
    }



    render(){
        if (this.props.display) {
            return (
                <div className='wrapper-create-title'>
                    <form>
                        <div className='create-title'>
                            <div className='create-title__btn-close' onClick={this.props.hideWindow}></div>
                            <div className='create-title__header'>
                                Введите название списка
                            </div>
                            <input 
                                className='create-title__input' 
                                placeholder='название'
                                type='text'
                                maxLength='14'
                                autoFocus
                                value = {this.state.value}
                                onChange={this.onChangeName}
                            />
                            <button 
                                className='create-title__button' 
                                onClick={(e) => {
                                    e.preventDefault()
                                    this.createName()
                                }}
                                >добавить
                            </button>
                        </div>
                    </form>
                </div>        
            )
        }
        return (
            <Fragment/>
        )
    }
   
}

const mapDispatchToProps = {
    createListName,
    hideWindow : hideCreateListName
}

const mapStateToProps = (state) => {    
    return {
        titles: state.titles,
        display: state.displayCreateListName
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(CreateListName)