import { REMOVE_PRODUCT,
         ADD_PRODUCT } from "../types";


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