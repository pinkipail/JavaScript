import { CREATE_LIST_NAME, SELECT_LIST_NAME } from "./types";
import { REMOVE_LIST_NAME } from "./types"
import { SHOW_CREATE_LIST_NAME } from "./types";
import { HIDE_CREATE_LIST_NAME } from "./types";

const initialState = {

    shopingLists:[
        {
            title: 'к чаю',
            products: [
                { label: 'Печенье', count: '1уп', price: '75р' }, 
                { label: 'Торт', count: '1шт', price: '345р' },
                { label: 'Чай', count: '2уп', price: '40р' }
            ]
        },
        {
            title: 'самое необхимое',
            products: [
                { label: 'Хлеб', count: '1шт', price: '20р' }, 
                { label: 'Молоко', count: '1л', price: '55р' },
                { label: 'Мясо', count: '2.5кг', price: '420р' },
                { label: 'Рыба', count: '1кг', price: '210р' }
            ]
        },
        {
            title: 'на салат',
            products: [
                { label: 'Помидоры', count: '2кг', price: '140р' }, 
                { label: 'Морковь', count: '3шт', price: '15р' },
                { label: 'Огурцы', count: '1кг', price: '90р' },
                { label: 'Кукуруза', count: '1уп', price: '60р' },
                { label: 'Перец', count: '4шт', price: '90р' },
                { label: 'Петрушка', count: '30г', price: '30р' }
            ]
        }
    ],
    activeList: 0,
    displayCreateListName: false
}
export const rootReducer = (state = initialState, action)=>{

    switch (action.type) {  
        case CREATE_LIST_NAME:
            return {...state, shopingLists: state.shopingLists.concat( {title: action.payload, products: []})}

        case REMOVE_LIST_NAME:
                return {...state, shopingLists: state.shopingLists.filter((item, i)=> i !== action.payload)}

        case SELECT_LIST_NAME:
            return {...state, activeList: action.payload}

        case SHOW_CREATE_LIST_NAME:
            return {...state, displayCreateListName: true}

        case HIDE_CREATE_LIST_NAME:
            return {...state, displayCreateListName: false}
    
        default:
            return state
    }
}