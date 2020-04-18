import { REMOVE_PRODUCT } from "../types";


export function removeProduct(id){
    return {
        type: REMOVE_PRODUCT,
        id: id
    }
}