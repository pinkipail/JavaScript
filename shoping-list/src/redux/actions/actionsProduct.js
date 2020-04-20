import { REMOVE_PRODUCT,
         ADD_PRODUCT, 
         CALCULATING_AMOUNT,
         CHECKED_PRODUCT,
         UNCHECKED_PRODUCT,
         CALCULATING_PRESENT_AMOUNT} from "../types";


export function addProduct({label, count, price}){
    return {
        type: ADD_PRODUCT,
        label,
        count,
        price
    }
}

export function removeProduct(id){
    return {
        type: REMOVE_PRODUCT,
        id: id
    }
}

export function checkedProduct(id){
    return {
        type: CHECKED_PRODUCT,
        id: id
    }
}

export function uncheckedProduct(id){
    
    return {
        type: UNCHECKED_PRODUCT,
        id: id
    }
}

export function calculatingPresentAmount(amount){
    return {
        type: CALCULATING_PRESENT_AMOUNT,
        amount
    }
}

export function calculatingAmount(amount){
    return {
        type: CALCULATING_AMOUNT,
        amount
    }
}

