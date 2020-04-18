import { CREATE_LIST_NAME,
    CHANGE_LIST_NAME, 
    REMOVE_LIST_NAME, 
    SELECT_LIST_NAME, 
    SHOW_CREATE_LIST_NAME, 
    HIDE_CREATE_LIST_NAME,  
    REMOVE_PRODUCT} from './types'

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
        case REMOVE_PRODUCT:
            let changeShopingList = state.shopingLists[state.activeList]
            changeShopingList.products = changeShopingList.products.filter((item, i)=> i !== action.id)
            console.log(changeShopingList);
            
            let tempState = state.shopingLists
            tempState.splice(state.activeList, 1, changeShopingList)
            console.log(tempState)
            return {
                    ...state,
                    shopingLists: tempState
                }
        default:
            return state
    }
}