import { CREATE_LIST_NAME,
    CHANGE_LIST_NAME, 
    REMOVE_LIST_NAME, 
    SELECT_LIST_NAME, 
    SHOW_CREATE_LIST_NAME, 
    HIDE_CREATE_LIST_NAME,  
    REMOVE_PRODUCT,
    ADD_PRODUCT,
    CALCULATING_AMOUNT} from './types'

const initialState = {

    shopingLists:[
        {
            title: 'к чаю',
            products: [
                { label: 'Печенье', count: '1уп', price: '75' }, 
                { label: 'Торт', count: '1шт', price: '345' },
                { label: 'Чай', count: '2уп', price: '40' }
            ]
        },
        {
            title: 'самое необхимое',
            products: [
                { label: 'Хлеб', count: '1шт', price: '20' }, 
                { label: 'Молоко', count: '1л', price: '55' },
                { label: 'Мясо', count: '2.5кг', price: '420' },
                { label: 'Рыба', count: '1кг', price: '210' }
            ]
        },
        {
            title: 'на салат',
            products: [
                { label: 'Помидоры', count: '2кг', price: '140' }, 
                { label: 'Морковь', count: '3шт', price: '15' },
                { label: 'Огурцы', count: '1кг', price: '90' },
                { label: 'Кукуруза', count: '1уп', price: '60' },
                { label: 'Перец', count: '4шт', price: '90' },
                { label: 'Петрушка', count: '30г', price: '30' }
            ]
        }
    ],
    activeList: 0,
    displayCreateListName: false,
    presentAmount: 0,
    totalAmount: 0

}
export const rootReducer = (state = initialState, action)=>{

    switch (action.type) {  
        case SELECT_LIST_NAME:
            return {...state, activeList: action.payload}
        
        case CHANGE_LIST_NAME:
            return {...state, shopingLists: state.shopingLists.map((listName, i) => {
                if(i === action.index)
                    listName.title =  action.value
                return listName
            })}

        case REMOVE_LIST_NAME:
            const tempActiveList = (state.activeList === state.shopingLists.length - 1 && state.activeList !== 0)
                ? state.activeList - 1
                : state.activeList

            return {
                    ...state,
                    shopingLists: state.shopingLists.filter((item, i)=> i !== action.payload),
                    activeList:tempActiveList
                }

        case CREATE_LIST_NAME:
            return {
                    ...state,
                    shopingLists: state.shopingLists.concat({title: action.payload, products: []}),
                    activeList: state.shopingLists.length
                }

        case SHOW_CREATE_LIST_NAME:
            return {...state, displayCreateListName: true}

        case HIDE_CREATE_LIST_NAME:
            return {...state, displayCreateListName: false}

    /* PRODUCT */

        case ADD_PRODUCT:{
            const newProduct =  { label: action.label, count: action.count, price: action.price }
            let tempState = state.shopingLists
            tempState[state.activeList].products = tempState[state.activeList].products.concat(newProduct)
            return {
                    ...state,
                    shopingLists: tempState 
                }
        }            


        case REMOVE_PRODUCT:{
            let changeShopingList = state.shopingLists[state.activeList]
            changeShopingList.products = changeShopingList.products.filter((item, i)=> i !== action.id)
            
            let tempState = state.shopingLists
            tempState.splice(state.activeList, 1, changeShopingList)
            return {
                    ...state,
                    shopingLists: tempState
                }
        }

        case CALCULATING_AMOUNT:
            
            return {
                    ...state,
                    totalAmount: state.shopingLists[state.activeList].products.reduce((accumulator, product) => accumulator + Number(product.price),0)
                }

        default:
            return state



    }
}