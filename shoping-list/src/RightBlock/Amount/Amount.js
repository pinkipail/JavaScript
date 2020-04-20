import React from 'react';
import './Amount.css'
import { useSelector, connect } from 'react-redux'
import { calculatingAmount } from '../../redux/actions/actionsProduct';

class Amount extends React.Component {

    constructor(props) {
        super(props)
        this.state = {
            presentAmount: props.presentAmount,
            totalAmount: props.totalAmount
        }
            
    }

    
    render(){
        return(
            <div className='wrapper-amount'>
                <div className='present-amount'>
                    Куплено на сумму: {this.props.presentAmount}р
                </div>
                <div className='total-amount'>
                    Всего: {this.props.totalAmount}р    
                </div>
            </div>
        )
    }
}

const mapDispatchToProps = {
    calculatingAmount: calculatingAmount
}

const mapStateToProps = (state) => {    
    return {
        totalAmount: state.totalAmount,
        presentAmount: state.presentAmount
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(Amount)