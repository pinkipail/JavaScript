import { CREATE_LIST_NAME } from "./types"
import { REMOVE_LIST_NAME } from "./types"
import { SELECT_LIST_NAME } from "./types"
import { SHOW_CREATE_LIST_NAME } from "./types"
import { HIDE_CREATE_LIST_NAME } from "./types"

export function createListName(name){
    return {
        type: CREATE_LIST_NAME,
        payload: name
    }
}

export function removeListName(id){
    return {
        type: REMOVE_LIST_NAME,
        payload: id
    }
}

export function selectListName(id){
    return {
        type: SELECT_LIST_NAME,
        payload: id
    }
}


export function showCreateListName(){
    return {
        type: SHOW_CREATE_LIST_NAME
    }
}

export function hideCreateListName(){
    return {
        type:  HIDE_CREATE_LIST_NAME
    }
}