import { CREATE_LIST_NAME,
    CHANGE_LIST_NAME, 
    REMOVE_LIST_NAME, 
    SELECT_LIST_NAME, 
    SHOW_CREATE_LIST_NAME, 
    HIDE_CREATE_LIST_NAME,  
    REMOVE_PRODUCT,
    ADD_PRODUCT,
    CALCULATING_AMOUNT,
    CHECKED_PRODUCT,
    UNCHECKED_PRODUCT,
    CALCULATING_PRESENT_AMOUNT,
    CHANGE_PRODUCT} from './types'

const initialState = {

    shopingLists:[
        {
            title: 'Сладкое',
            products: [
                { label: 'Печенье', count: '1', price: '75' }, 
                { label: 'Торт', count: '1', price: '345' },
                { label: 'Чай', count: '2', price: '40' }
            ],
            selectedProducts: [
                { label: 'Мороженое', count: '1', price: '175' }, 
                { label: 'Йогурт', count: '1', price: '25' },
            ]
        },
        {
            title: 'самое необхимое',
            products: [
                { label: 'Хлеб', count: '1', price: '20' }, 
                { label: 'Молоко', count: '1', price: '55' },
                { label: 'Мясо', count: '2.5', price: '420' },
                { label: 'Рыба', count: '1', price: '210' }
            ],
            selectedProducts: []
        },
        {
            title: 'на салат',
            products: [
                { label: 'Помидоры', count: '2', price: '140' }, 
                { label: 'Морковь', count: '3', price: '15' },
                { label: 'Огурцы', count: '1', price: '90' },
                { label: 'Кукуруза', count: '1', price: '60' },
                { label: 'Перец', count: '4', price: '90' },
                { label: 'Петрушка', count: '30', price: '30' },
                { label: 'Помидоры', count: '2', price: '140' }, 
                { label: 'Морковь', count: '3', price: '15' },
                { label: 'Огурцы', count: '1', price: '90' },
                { label: 'Кукуруза', count: '1', price: '60' },
                { label: 'Перец', count: '4', price: '90' },
                { label: 'Петрушка', count: '30', price: '30' }
            ],
            selectedProducts: []
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
                    shopingLists: (state.shopingLists.length !==1)
                        ? state.shopingLists.filter((item, i)=> i !== action.payload)
                        : [{title: 'без названия', products: [], selectedProducts: []}],
                    activeList:tempActiveList
                }

        case CREATE_LIST_NAME:
            return {
                    ...state,
                    shopingLists: state.shopingLists.concat({title: action.payload, products: [], selectedProducts: []}),
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

        case CHANGE_PRODUCT:{
            const tempProducts = state.shopingLists[state.activeList].products.map((product, i) => {
                if(i === action.index){
                    product.label = action.label
                    product.count = action.count
                    product.price = action.price
                }
                return product
            })

            let tempShopingLists = state.shopingLists
            tempShopingLists[state.activeList].products = tempProducts
            
            return {
                ...state,
                shopingLists: tempShopingLists
            }
        }

        case REMOVE_PRODUCT:{
            let changeShopingList = state.shopingLists[state.activeList]
            changeShopingList.products = changeShopingList.products.filter((item, i)=> i !== action.id)
            
            let tempShopingLists = state.shopingLists
            tempShopingLists.splice(state.activeList, 1, changeShopingList)
            return {
                    ...state,
                    shopingLists: tempShopingLists
                }
        }

        case CHECKED_PRODUCT:{
            const tempProduct = state.shopingLists[state.activeList].products[action.id]

            let changeShopingList = state.shopingLists[state.activeList]
            changeShopingList.products = changeShopingList.products.filter((item, i)=> i !== action.id)
            changeShopingList.selectedProducts = changeShopingList.selectedProducts.concat(tempProduct)
            
            let tempShopingLists = state.shopingLists
            tempShopingLists.splice(state.activeList, 1, changeShopingList)
            return {
                    ...state,
                    shopingLists: tempShopingLists  
                }
            }

        case UNCHECKED_PRODUCT:{

            const tempProduct = state.shopingLists[state.activeList].selectedProducts[action.id]

            let changeShopingList = state.shopingLists[state.activeList]
            changeShopingList.selectedProducts = changeShopingList.selectedProducts.filter((item, i)=> i !== action.id)
            changeShopingList.products = changeShopingList.products.concat(tempProduct)
            
            let tempShopingLists = state.shopingLists
            tempShopingLists.splice(state.activeList, 1, changeShopingList)
            return {
                    ...state,
                    shopingLists: tempShopingLists
                }
            }

        case CALCULATING_PRESENT_AMOUNT:
            let  presentAmount 
            try {
                presentAmount = state.shopingLists[state.activeList].selectedProducts.reduce((accumulator, product) => accumulator + Number(product.count)*Number(product.price),0)
            }catch{
                presentAmount = []
            }
            return {
                    ...state,
                    presentAmount: presentAmount
                }
        case CALCULATING_AMOUNT:
            let  totalAmount 
            try {
                totalAmount = state.shopingLists[state.activeList].products.reduce((accumulator, product) => accumulator + Number(product.price)*Number(product.count), state.presentAmount)
            }catch{
                totalAmount = []
            }

            return {
                    ...state,
                    totalAmount: totalAmount
                }

        default:
            return state
    }
}